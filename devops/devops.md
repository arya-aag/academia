# DevOps

## SideKiq on server

SideKiq shuts down if all connecting ssh clients exit from the server (_Need to research why this happens_)

Fix: `loginctl enable-linger username`
