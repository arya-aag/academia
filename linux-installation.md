# Linux Installation

## Table of Contents

- [Linux Installation](#linux-installation)
  - [Table of Contents](#table-of-contents)
  - [Adding Windows to a fully Linux machine](#adding-windows-to-a-fully-linux-machine)
    - [Appendix](#appendix)

## Adding Windows to a fully Linux machine

1. Create a new partition (preferably unallocated space) using gparted
2. If you just have a single partition, you'll need to do this form a bootable usb drive
3. Access bios settings by hitting the NOVO button (with a curved arrow symbol) if fast boot is enabled. (else click F2)
4. In bios, set the boot priority accordingly
5. In bios, set secure boot to disabled
6. Restart pc
7. Choose correct partition to install windows in
8. If usb bootable is wrongly created, at the time of trying to select the partition, it will show the below error "Windows cannot be installed to this disk, The selected disk is of the GPT partition style". So when creating the windows bootable usb drive (follow these instructions) if boot type is set to UEFI instead of LEGACY: [instructions](https://superuser.com/questions/1008125/when-uefi-motherboard-firmware-is-set-to-uefinot-legacy-usb-is-not-detecte)

### Appendix

- [Restore usb to full memory](https://superuser.com/questions/752874/16-gb-usb-flash-drive-capacity-down-to-938-mb)
