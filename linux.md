# Linux

## Table of Contents

- [Linux](#linux)
  - [Table of Contents](#table-of-contents)
  - [How To's](#how-tos)
  - [How to change swap partition](#how-to-change-swap-partition)

## How To's

| what                                | how                                   |
| ----------------------------------- | ------------------------------------- |
| show current IP address             | `ip addr show`                        |
| current IP address (smaller result) | `ip addr show | grep inet`            |
| check memory/cpu usage of device    | `htop` (press F6 to sort by a column) |
| disk usage stats                    | `df -h`                               |

## How to change swap partition

```bash
# find the current swap partition
cat /etc/fstab

# edit above file and replace the swap UUID with the UUID of the new partition that you want to use as swap
sudo vim /etc/fstab

# activate the partition
sudo swapon --all --verbose

# check that the new partition is listed in the output of:
cat /proc/swaps

# reboot the computer
reboot
```

[Reference](https://help.ubuntu.com/community/SwapFaq#How_do_I_add_or_modify_a_swap_partition.3F)
