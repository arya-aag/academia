# Maven

## Table of Contents

- [Add custom external JAR as maven dependency](#add-custom-external-jar-as-maven-dependency)

### Add custom external JAR as maven dependency

- install the JARs into your local maven repository using:

  `mvn install:install-file -Dfile=non-maven-proj.jar -DgroupId=some.group -DartifactId=non-maven-proj -Dversion=1 -Dpackaging=jar -DgeneratePom=true`

- you might need to pass additional arguments for certificate / keystore

  `-Djavax.net.ssl.trustStore=trust.jks -Djavax.net.ssl.trustStorePassword=abcdef -Djavax.net.ssl.keyStore=/home/directory/mycertificate.p12 -Djavax.net.ssl.keyStoreType=pkcs12 -Djavax.net.ssl.keyStorePassword=XXXXXX`

- Copy the entire directory structure from your local repository to your in-project repository and include it in your pom.xml like:

  ```xml
  <repository>
    <id>in-project</id>
    <name>In Project Repo</name>
    <url>file://${project.basedir}/lib</url>
  </repository>
  ```

- Include the dependency as normal

- Further reference: [link](https://sookocheff.com/post/java/local-maven-repository/)
