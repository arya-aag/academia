# Flutter

## Contents

- [Flutter](#flutter)
  - [Contents](#contents)
  - [Complete courses](#complete-courses)
  - [Open particular whatsapp chat message](#open-particular-whatsapp-chat-message)
  - [Embed youtube video inline](#embed-youtube-video-inline)
  - [Splash Screen](#splash-screen)
  - [Routing](#routing)
  - [Forms](#forms)

## Complete courses

- [Flutter Udemy course](https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/)

## Open particular whatsapp chat message

- [Flutter Open Whatsapp Library](https://pub.dev/packages/flutter_open_whatsapp)
- [Using intent (no lib)](https://stackoverflow.com/questions/50672710/how-to-launch-whatsapp-and-facebook-messenger-window-from-flutter-to-point-to-a)

## Embed youtube video inline

- [Flutube library](https://pub.dev/packages/flutube)
- [Youtube Player Flutter library (supports version 20 or more)](https://pub.dev/packages/youtube_player_flutter)
- [Youtube Player library (supports all versions)](https://pub.dev/packages/youtube_player)

## Splash Screen

- [Splash Screen Activity Design (Youtube)](https://www.youtube.com/watch?v=FNBuo-7zg2Q)
- [launch_background.xml options](https://developer.android.com/guide/topics/resources/drawable-resource)
- [Flutter 2019: Real Splash Screens Tutorial - Medium](https://medium.com/flutter-community/flutter-2019-real-splash-screens-tutorial-16078660c7a1)

## Routing

- [Separate routing in different file](https://medium.com/flutter-community/flutter-navigation-cheatsheet-a-guide-to-named-routing-dc642702b98c)

## Forms

- When there are several input fields in a form, the widget of choice should be `SingleChildScrollView > Column` over `ListView`. This is because ListView removes widgets from the widget tree when they are scrolled out of view far enough, leading to a loss of data entered in those fields. [(Reference)](https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/learn/lecture/15145432#overview)
