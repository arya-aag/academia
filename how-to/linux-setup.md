# Linux Setup

## Table of Contents

- [Linux Setup](#linux-setup)
  - [Table of Contents](#table-of-contents)
  - [Setup android studio](#setup-android-studio)

## Setup android studio

1. Download and unzip into `/usr/local`
2. Run `sudo chown -R $USER:$USER /usr/local/android-studio`
3. If you get the following error `/dev/kvm device: permission denied; Grant current user access to /dev/kvm`, follow below steps:

   - Run `ls -al /dev/kvm`. The output should be:

     `crw------- 1 root root 10, 232 Dec 12 08:42 /dev/kvm`

   - Install qemu-kvm with `sudo apt install qemu-kvm`
   - Running the above command should now give output:

     `crw-rw---- 1 root kvm 10, 232 Dec 12 09:01 /dev/kvm`

   - Next, use the adduser command to add current user to the kvm group.

     `sudo adduser $USER kvm`

   - And then own the file /dev/kvm using chown

     `sudo chown $USER /dev/kvm`

   - Running `ls -al /dev/kvm` should now output:

     `crw-rw---- 1 arya kvm 10, 232 Dec 12 09:01 /dev/kvm`
