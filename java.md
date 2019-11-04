# Java

## Table of Contents

- [Import certificate into keystore](#import-certificate-into-keystore)
- [Run jar on specific port](#run-jar-on-specific-port)

### Import certificate into keystore

[https://www.thomasvitale.com/https-spring-boot-ssl-certificate/](https://www.thomasvitale.com/https-spring-boot-ssl-certificate/)

Use an existing SSL certificate

`keytool -import -alias tomcat -file myCertificate.crt -keystore keystore.p12 -storepass password`

[stackoverflow - how-to-check-certificate-name-and-alias-in-keystore-files](https://stackoverflow.com/questions/12893995/how-to-check-certificate-name-and-alias-in-keystore-files)

You can run the following command to list the content of your keystore file (and alias name):

`keytool -v -list -keystore .keystore`

If you are looking for a specific alias, you can also specify it in the command:

`keytool -list -keystore .keystore -alias foo`

### Run jar on specific port

Note: _Need to add commands for other PowerShell, bash etc._

| Terminal | Command                                          |
| -------- | ------------------------------------------------ |
| cmd      | `java -Dserver.port=8888 -jar myApplication.jar` |
