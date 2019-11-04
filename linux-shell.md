# Linux Shell

## Table of Contents

- [Linux Shell](#linux-shell)
  - [Table of Contents](#table-of-contents)
  - [References](#references)
  - [Complex loop over files](#complex-loop-over-files)
  - [String replace](#string-replace)
  - [Show all running processes](#show-all-running-processes)
  - [List processes matching a string and kill them](#list-processes-matching-a-string-and-kill-them)

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
