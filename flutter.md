# Flutter

## Contents

- [Flutter](#flutter)
  - [Contents](#contents)
  - [Complete courses](#complete-courses)
  - [CI/CD for Flutter apps](#cicd-for-flutter-apps)
  - [Embed youtube video inline](#embed-youtube-video-inline)
  - [Fonts (update family/size etc from code)](#fonts-update-familysize-etc-from-code)
  - [Forms](#forms)
  - [Open particular whatsapp chat message](#open-particular-whatsapp-chat-message)
  - [Routing](#routing)
  - [Splash Screen](#splash-screen)

## Complete courses

- [Flutter Udemy course](https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/)

**IMPORTANT**: `Please arrange all sections below this in alphabetical order!`

## CI/CD for Flutter apps

- [Official Docs](https://flutter.dev/docs/deployment/cd)
- GitLab
  - [Setup Gitlab CI in Flutter-Android Project](https://medium.com/@chima_37359/setup-gitlab-ci-in-flutter-android-project-89f6628828e8)
- GitHub
  - [flutter_redux with TravisCI](https://github.com/brianegan/flutter_redux/blob/master/.travis.yml)
  - [CI/CD for Flutter Apps Using GitHub Actions](https://medium.com/better-programming/ci-cd-for-flutter-apps-using-github-actions-b833f8f7aac)
- codemagic (works with any VCS)
  - [Official blog](https://blog.codemagic.io/getting-started-with-codemagic/)

## Embed youtube video inline

- [Flutube library](https://pub.dev/packages/flutube)
- [Youtube Player Flutter library (supports API version 20 or more)](https://pub.dev/packages/youtube_player_flutter)
- [Youtube Player library (supports all API versions)](https://pub.dev/packages/youtube_player)

## Fonts (update family/size etc from code)

- [Different fonts for different locales](https://medium.com/saugo360/flutter-different-fonts-for-different-locales-d190a89b58c)
- [Controlling text height using StrutStyle](https://medium.com/@najeira/control-text-height-using-strutstyle-4b9b5151668b)

## Forms

- When there are several input fields in a form, the widget of choice should be `SingleChildScrollView > Column` over `ListView`. This is because ListView removes widgets from the widget tree when they are scrolled out of view far enough, leading to a loss of data entered in those fields. [(Reference)](https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/learn/lecture/15145432#overview)

## Open particular whatsapp chat message

- [Flutter Open Whatsapp Library](https://pub.dev/packages/flutter_open_whatsapp)
- [Using intent (no lib)](https://stackoverflow.com/questions/50672710/how-to-launch-whatsapp-and-facebook-messenger-window-from-flutter-to-point-to-a)

## Routing

- [Separate routing in different file](https://medium.com/flutter-community/flutter-navigation-cheatsheet-a-guide-to-named-routing-dc642702b98c)

## Splash Screen

- [Splash Screen Activity Design (Youtube)](https://www.youtube.com/watch?v=FNBuo-7zg2Q)
- [launch_background.xml options](https://developer.android.com/guide/topics/resources/drawable-resource)
- [Flutter 2019: Real Splash Screens Tutorial - Medium](https://medium.com/flutter-community/flutter-2019-real-splash-screens-tutorial-16078660c7a1)
