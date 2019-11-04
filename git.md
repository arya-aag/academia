# Git

## Table of Contents

- [Git](#git)
  - [Table of Contents](#table-of-contents)
  - [find out developer contribution in a repo](#find-out-developer-contribution-in-a-repo)
  - [list merged branches](#list-merged-branches)
  - [delete all merged local branches](#delete-all-merged-local-branches)
  - [delete all merged branches from origin](#delete-all-merged-branches-from-origin)
  - [list all local branches without a remote](#list-all-local-branches-without-a-remote)
  - [list all local branches that never had a remote or with deleted remotes](#list-all-local-branches-that-never-had-a-remote-or-with-deleted-remotes)
  - [which git branch has a commit](#which-git-branch-has-a-commit)
  - [refresh list of remote branches](#refresh-list-of-remote-branches)
  - [checkout specific commit](#checkout-specific-commit)
  - [create a tag](#create-a-tag)
  - [Git Aliases for bash etc.](#git-aliases-for-bash-etc)
  - [Git Functions](#git-functions)
    - [Git log find by commit message](#git-log-find-by-commit-message)

## find out developer contribution in a repo

Note: git blame, number of lines per developer, in a repository

`git log --shortstat --pretty="%cE" | sed 's/\(.*\)@.*/\1/' | grep -v "^$" | awk 'BEGIN { line=""; } !/^ / { if (line=="" || !match(line, $0)) {line = $0 "," line }} /^ / { print line " # " $0; line=""}' | sort | sed -E 's/# //;s/ files? changed,//;s/([0-9]+) ([0-9]+ deletion)/\1 0 insertions\(+\), \2/;s/\(\+\)$/\(\+\), 0 deletions\(-\)/;s/insertions?\(\+\), //;s/ deletions?\(-\)//' | awk 'BEGIN {name=""; files=0; insertions=0; deletions=0;} {if ($1 != name && name != "") { print name ": " files " files changed, " insertions " insertions(+), " deletions " deletions(-), " insertions-deletions " net"; files=0; insertions=0; deletions=0; name=$1; } name=$1; files+=$2; insertions+=$3; deletions+=$4} END {print name ": " files " files changed, " insertions " insertions(+), " deletions " deletions(-), " insertions-deletions " net";}'`

[StackOverflow answer link](https://stackoverflow.com/questions/1265040/how-to-count-total-lines-changed-by-a-specific-author-in-a-git-repository/20414465#20414465)

## list merged branches

git branch --merged | egrep -v "(^\*|master|staging)"

## delete all merged local branches

git branch --merged | egrep -v "(^\*|master|staging)" | xargs git branch -d

## delete all merged branches from origin

git branch --merged | egrep -v "(^\*|master|staging)" | xargs git push --delete origin

## list all local branches without a remote

git branch -vv | cut -c 3- | awk '$3 !~/\[/ { print $1 }'

## list all local branches that never had a remote or with deleted remotes

git branch -vv | cut -c 3- | awk '{ if ( $3 !~ /\[/ || $3 ~ /:/ ) print \$1 }'

## which git branch has a commit

(local ) git branch --contains 258dd7a77a066a68278de37a7ca8bc6aef9fcdcd
(remote) git branch -r --contains 258dd7a77a066a68278de37a7ca8bc6aef9fcdcd

## refresh list of remote branches

git remote update origin --prune

## checkout specific commit

git checkout tags/v1.0.94

## create a tag

git tag -a v1.0.99 -m "Spaces v1"
git push origin v1.0.99

## Git Aliases for bash etc.

alias ga='git add'
alias gaa='git add .'
alias gaaa='git add --all'
alias gau='git add --update'
alias gb='git branch'
alias gbd='git branch --delete '
alias gc='git commit'
alias gcm='git commit --message'
alias gcf='git commit --fixup'
alias gco='git checkout'
alias gcob='git checkout -b'
alias gcom='git checkout master'
alias gcos='git checkout staging'
alias gcod='git checkout develop'
alias gd='git diff'
alias gda='git diff HEAD'
alias gi='git init'
alias glg='git log --graph --oneline --decorate --all'
alias gld='git log --pretty=format:"%h %ad %s" --date=short --all'
alias gm='git merge --no-ff'
alias gma='git merge --abort'
alias gmc='git merge --continue'
alias gp='git pull'
alias gpr='git pull --rebase'
alias gr='git rebase'
alias gs='git status'
alias gss='git status --short'
alias gst='git stash'
alias gsta='git stash apply'
alias gstd='git stash drop'
alias gstl='git stash list'
alias gstp='git stash pop'
alias gsts='git stash save'

## Git Functions

### Git log find by commit message

function glf() { git log --all --grep="\$1"; }
