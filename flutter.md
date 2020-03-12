# Flutter

## Contents

- [Flutter](#flutter)
  - [Contents](#contents)
  - [Complete courses](#complete-courses)
  - [Pending research topics/material](#pending-research-topicsmaterial)
  - [Specific how-tos and tutorials](#specific-how-tos-and-tutorials)
    - [Access device contact(s)](#access-device-contacts)
    - [CI/CD for Flutter apps](#cicd-for-flutter-apps)
    - [Device orientation](#device-orientation)
    - [Embed youtube video inline](#embed-youtube-video-inline)
    - [Fonts (update family/size etc from code)](#fonts-update-familysize-etc-from-code)
    - [Forms](#forms)
    - [Install different flavours](#install-different-flavours)
    - [Open particular whatsapp chat message](#open-particular-whatsapp-chat-message)
    - [Routing](#routing)
    - [Splash screen and Launcher icon](#splash-screen-and-launcher-icon)

## Complete courses

- [Learn Flutter & Dart to Build iOS & Android Apps - Maximilian Schwarzmüller](https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/)

## Pending research topics/material

- FlutterInteract (Dec 2019) (_Review entire video_)
- Adobe XD Flutter plugin
- Flutter Supernova
- Checkout Redrix in PlayStore
- [flutter.gskinner.com](flutter.gskinner.com)
- Flutter Material Theming
- Rive (formerly Flare)
- Key Widgets
  - Matrix4 _mtx.setEntry(3,2,0.001)_
  - SingleChildRenderObjectWidget
  - Canvas & CustomPainer (_drawVertices, drawAtlas_)

## Specific how-tos and tutorials

**IMPORTANT**: `Please arrange all sections below this in alphabetical order!`

### Access device contact(s)

- [native_contact_picker](https://pub.dev/packages/native_contact_picke)
  - Show contact picker to pick single contact
  - Only get name & phone
  - No permissions required
- [contacts_service](https://pub.dev/packages/contacts_service)
  - Access entire contacts list
  - Access extra fields like email/image/address etc
  - Allows filtering by name
  - Requires contacts read/write permissions

### CI/CD for Flutter apps

- [Official Docs](https://flutter.dev/docs/deployment/cd)
- GitLab
  - [Setup Gitlab CI in Flutter-Android Project](https://medium.com/@chima_37359/setup-gitlab-ci-in-flutter-android-project-89f6628828e8)
- GitHub
  - [flutter_redux with TravisCI](https://github.com/brianegan/flutter_redux/blob/master/.travis.yml)
  - [CI/CD for Flutter Apps Using GitHub Actions](https://medium.com/better-programming/ci-cd-for-flutter-apps-using-github-actions-b833f8f7aac)
- codemagic (works with any VCS)
  - [Official blog](https://blog.codemagic.io/getting-started-with-codemagic/)

### Device orientation

- [SystemChrome.setPreferredOrientations](https://api.flutter.dev/flutter/services/SystemChrome/setPreferredOrientations.html)
- [StackOverflow answer](https://stackoverflow.com/questions/49418332/flutter-how-to-prevent-device-orientation-changes-and-force-portrait)

### Embed youtube video inline

- [Flutube library](https://pub.dev/packages/flutube)
- [Youtube Player Flutter library (supports API version 20 or more)](https://pub.dev/packages/youtube_player_flutter)
- [Youtube Player library (supports all API versions)](https://pub.dev/packages/youtube_player)

### Fonts (update family/size etc from code)

- [Different fonts for different locales](https://medium.com/saugo360/flutter-different-fonts-for-different-locales-d190a89b58c)
- [Controlling text height using StrutStyle](https://medium.com/@najeira/control-text-height-using-strutstyle-4b9b5151668b)

### Forms

- When there are several input fields in a form, the widget of choice should be `SingleChildScrollView > Column` over `ListView`. This is because ListView removes widgets from the widget tree when they are scrolled out of view far enough, leading to a loss of data entered in those fields. [(Reference)](https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/learn/lecture/15145432#overview)

### Install different flavours

- [Link #1](https://iiro.dev/2018/03/02/separating-build-environments/)
- [Link #2](http://myhexaville.com/2017/08/07/android-how-to-install-debugrelease-versions-simultaneously/)
- [Link #3](https://medium.com/@animeshjain/build-flavors-in-flutter-android-and-ios-with-different-firebase-projects-per-flavor-27c5c5dac10b)
- [Link #4](https://medium.com/flutter-community/flutter-ready-to-go-e59873f9d7de)

### Open particular whatsapp chat message

- [Flutter Open Whatsapp Library](https://pub.dev/packages/flutter_open_whatsapp)
- [Using intent (no lib)](https://stackoverflow.com/questions/50672710/how-to-launch-whatsapp-and-facebook-messenger-window-from-flutter-to-point-to-a)

### Routing

- [Separate routing in different file](https://medium.com/flutter-community/flutter-navigation-cheatsheet-a-guide-to-named-routing-dc642702b98c)

### Splash screen and Launcher icon

- [Quick icon mipmap generator](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html)
- [SVG to vector asset converter (Prefer Android Studio's import tool over this)](https://svg2vector.com/)
- [How to make a gradient background in splash screen (StackOverflow)](https://stackoverflow.com/questions/13929877/how-to-make-gradient-background-in-android/13930644#13930644)
- Sample splash screen:

  ```xml
    <!-- launch_background.xml -->
    <layer-list xmlns:android="http://schemas.android.com/apk/res/android">
        <item android:drawable="@drawable/splash_background" />
        <item android:drawable="@drawable/splash_graphic" android:gravity="center"/>
    </layer-list>

      <!-- splash_background.xml -->
    <shape xmlns:android="http://schemas.android.com/apk/res/android" android:shape="rectangle">
        <gradient
            android:angle="90" android:endColor="#276b81" android:startColor="#55b692" android:type="linear" />
        <corners android:radius="0dp" />
  </shape>
  ```

- [Splash Screen Activity Design (Youtube)](https://www.youtube.com/watch?v=FNBuo-7zg2Q)
- [launch_background.xml options](https://developer.android.com/guide/topics/resources/drawable-resource)
- [Flutter 2019: Real Splash Screens Tutorial - Medium](https://medium.com/flutter-community/flutter-2019-real-splash-screens-tutorial-16078660c7a1)
