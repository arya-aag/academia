# Linux Shell

## Table of Contents

- [Linux Shell](#linux-shell)
  - [Table of Contents](#table-of-contents)
  - [References](#references)
  - [Complex loop over files](#complex-loop-over-files)
  - [String replace](#string-replace)
  - [Show all running processes](#show-all-running-processes)
  - [List processes matching a string and kill them](#list-processes-matching-a-string-and-kill-them)
  - [Different files and their use cases](#different-files-and-their-use-cases)
  - [Set tab autocomplete to be case isnensitive](#set-tab-autocomplete-to-be-case-isnensitive)

## References

- [An A-Z Index of the Bash command line for Linux](https://ss64.com/bash/)

## Complex loop over files

```bash
for file in \*\_CG_PSLIP_IND.pdf; do
mv "$file" "${file/\_CG_PSLIP_IND/ Citi}"
done
```

## String replace

Replace first occurrence: ${parameter/pattern/string}
Replace all occurrences: ${parameter//pattern/string}

Example:

```bash
original="I love Suzi and Marry"
old="Suzi"
new="Sara"

echo "${original/Suzi/Sara}" # without using variables
echo "${original/$old/$new}" # using variables
```

## Show all running processes

```bash
ps -fA
```

| command | explanation                                           |
| ------- | ----------------------------------------------------- |
| ps      | process status                                        |
| f       | Full listing, all columns                             |
| A       | select all processes (including those of other users) |
| e       | select all processes                                  |

Usually returns a large list, so can be _grepped_ : `ps -fA | grep postgres`

To include column headers, try : `ps -fA | egrep "postgres|PID"`

## List processes matching a string and kill them

```bash
ps aux | grep spring | awk '{print $2}' | xargs -L 1 kill
```

| command | explanation                                                                      |
| ------- | -------------------------------------------------------------------------------- |
| ps aux  | list processses                                                                  |
| grep    | to filter rows                                                                   |
| awk     | takes previous text as input and provides it as input to commands via $1, $2 etc |
| xargs   | "-L 1" means take the first item from the previous thing as input and run "kill" |

## Different files and their use cases

Reference links:

- [1](https://apple.stackexchange.com/questions/51036/what-is-the-difference-between-bash-profile-and-bashrc)
- [2](https://serverfault.com/questions/261802/what-are-the-functional-differences-between-profile-bash-profile-and-bashrc)

`.profile`

For things that are not specifically related to Bash, like environment variables PATH and friends, and should be available anytime.

`.bash_profile`

When you login (type username and password) via console, either sitting at the machine, or remotely via ssh: .bash_profile is executed to configure your shell before the initial command prompt.

`.bashrc`

This is executed every time you open a new terminal window before the window command prompt. Use this for configuring the interactive Bash usage, like Bash aliases, setting your favorite editor, setting the Bash prompt, etc.

## Set tab autocomplete to be case isnensitive

```bash
if [ ! -a ~/.inputrc ]; then echo '$include /etc/inputrc' > ~/.inputrc; fi
echo 'set completion-ignore-case On' >> ~/.inputrc
```
