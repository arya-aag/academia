# Linux

## Table of Contents

- [Show all running processes](#show-all-running-processes)
- [Show current ip address](#show-current-ip-address)
- [References](#references)

### Show all running processes

`ps -fA` : (ps = process status)

    f : Full listing, all columns
    A : select all processes (including those of other users)
    e : select all processes

Usually returns a large list, so can be _grepped_ : `ps -fA | grep postgres`

To include column headers, try : `ps -fA | egrep "postgres|PID"`

### Show current ip address

`ip addr show` : Show ip address details

`ip addr show | grep inet` : Grep it to get a smaller result

### References

- [An A-Z Index of the Bash command line for Linux](https://ss64.com/bash/)
