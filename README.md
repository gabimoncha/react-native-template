# :space_invader: React Native Template TypeScript with Goodies ![npm](https://img.shields.io/npm/dw/@gabimoncha/react-native-template)

An opinionated template to bootstrap your next React Native app with all the time-wasting packages you need to have.

## :computer: Contributions are very welcome 🤝

### Let's build the best React Native template together 🚀

Please check out the [contributing document](CONTRIBUTING.md).

Preconfigured with

- Synced with the recommended [TypeScript template](https://reactnative.dev/docs/typescript#getting-started-with-typescript)
- [Storybook](https://github.com/storybookjs/storybook/) The UI component explorer. Develop, document, & test React Native components
- [React Query](https://github.com/tannerlinsley/react-query) for api calls
- [Zustand](https://github.com/pmndrs/zustand) instead of Redux
- [styled-components](https://github.com/styled-components/styled-components)
- [styled-system](https://github.com/styled-system/styled-system)
- [React Navigation](https://reactnavigation.org/) for navigation and deeplinking.
- [Wix React Native Notifications](https://github.com/wix/react-native-notifications) native notifications.
- [react-native-keychain](https://github.com/oblador/react-native-keychain) for Keychain/Keystore access.
- [react-native-permissions](https://github.com/zoontek/react-native-permissions) unified permissions api for iOS and Android.
- [react-i18next](https://github.com/i18next/react-i18next) internationalization.
- [Code Push](https://github.com/microsoft/react-native-code-push) syncronize JavaScript and Images with over-the-air updates.
- [Crisp chat](https://github.com/walterholohan/react-native-crisp-chat-sdk) free live customer support.
- [Sentry](https://github.com/getsentry/sentry-react-native) for debugging in production.
- [react-native-appstate-hook](https://github.com/amrlabib/react-native-appstate-hook) handle app state in your app.
- [react-native-file-logger](https://github.com/BeTomorrow/react-native-file-logger) to log important stuff.
- [react-native-svg](https://github.com/react-native-community/react-native-svg) because svg.
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
- [AsyncStorage](https://github.com/react-native-community/async-storage) you're gonna install it anyway.
- [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo) Network Info API for Android, iOS, macOS & Windows.
- [FastImage](https://github.com/DylanVann/react-native-fast-image) its more performant.
- [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for unit and component tests.
- [Detox](https://github.com/wix/Detox) for e2e.
- [why-did-you-render](https://github.com/welldone-software/why-did-you-render) to avoid re-renders.

## Contents

- [Documentation](#documentation)
- [Getting Started](#getting-started)
- [Road Map](#road-map)
- [Optional Steps](#optional-steps)
- [Credits](#credits)

## Documentation

- [Libraries](#libraries)
- [Directory Structure](#directory-structure)

## Getting Started

Create a new project using the template.

- **Note:** the command will fail if you have the global legacy react-native-cli installed. Make sure you uninstall it first. More info at [react-native-community/cli](https://github.com/react-native-community/cli#about).

### RN 0.64.0

```bash
npx react-native init MyApp --template @gabimoncha/react-native-template
```

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| 0.64         | 1.1.2    |

## Road Map

- Finish Detox integration
- Add Docusaurs docs
- [Codepush Code Signing](https://github.com/microsoft/code-push/tree/v3.0.1/cli#code-signing)

## Optional Steps

#### Set up deep linking scheme

Implementation was based on react-navigation[instructions](https://reactnavigation.org/docs/deep-linking/#set-up-with-bare-react-native-projects).

1. Update the prefix with wanted URI in `App.tsx`

1. iOS

Update `CFBundleURLName` and `CFBundleURLSchemes` to your desired URI

1. Android

Update `android:scheme` value inside `<data>` tag from the `<intent-filter>`

#### Set up notifications

1. Android
Create a Firebase project, change bundle id, register your app in Firebase, replace configuration file android/app/google-services.json
![Instructions to get the configuration file](https://firebase.google.com/docs/android/setup#console)

1. iOS
Enable Push Notification capability from Xcode
You must be a member of the Apple Developer Program in order to enable Push Notifications
![Instructions to add push notifications capability](https://i.stack.imgur.com/qsQTx.jpg)

#### Customize notification appearance on Android

Starting Android 10 (API 29), notification icons should be glyphs. You need to follow this step to [customize the notification appearance](https://wix.github.io/react-native-notifications/docs/installation-android/#step-6-customize-the-appearance).

#### Set up Code Push

1. You will need to have [AppCenter CLI](https://github.com/microsoft/appcenter-cli) installed

1. Creating an AppCenter account and/or organization and create an app for each platform and environment

1. Copy and Replace the CodePushDeploymentKey in android/app/build.gradle under `buildTypes`

1. Copy and Replace the CodePushDeploymentKey in android/app/build.gradle and XCode -> YourProject -> Build Settings -> `CODE_PUSH_KEY`

You can retrieve this values by running `appcenter codepush deployment list -a <ownerName>/<appName> -k`

#### Connect To Crisp chat

Register an account and website on [the platform](https://crisp.chat). Go to Settings > Website settings > Select website > Set up Instructions > Copy Website ID and replace it in `AppDelegate.m` and `MainApplication.java`

#### Connect To Sentry

This template comes with [Sentry](https://github.com/getsentry/sentry-react-native), but its disabled until you connect your account.

To connect your account:

```bash
$ cd MyApp/

# For MacOS
$ npx sentry-wizard -i reactNative -p ios android

# Other Platforms
$ npx sentry-wizard -i reactNative -p android
```

Insert your sentry DSN in each [.env](https://github.com/osamaq/react-native-template/blob/ed37c213eacf0681c4f50f959bad170d46be0ed7/template/.env.prod#L5) file (dev, staging and production) and you're all done.

#### Add project email for the FileLogger

Update project email used by `sendLoggedFiles` method in `Home.tsx`

## Libraries

Let's briefly go over the benefit of each library included in this template.

### TypeScript

For type safety ¯\\_(ツ)_/¯

But in all seriousness, if you are considering this template I assume you are a TypeScript fan. If you happen to be a JavaScript user, this template might be overwhelming. If you would like to start learning TypeScript, I suggest bootstrapping with this instead [react-native-community/react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript) so you can learn at your own pace.

### Storybook

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components

### React Query

Hooks for fetching, caching and updating asynchronous data in React.

### Zustand

A small, fast and scaleable bearbones state-management solution. Has a comfy api based on hooks, isn't boilerplatey or opinionated, but still just enough to be explicit and flux-like.

### styled-components

Style your apps without stress with dynamic styling and painless maintenance. `styled-components` utilises tagged template literals to style your component. Checkout this [Getting started tutorial](https://styled-components.com/docs/basics#getting-started).

### styled-system

Styled System is a collection of utility functions that add style props to your React components and allows you to control styles based on a global theme object with typographic scales, colors, and layout properties. Checkout this [Getting started tutorial](https://styled-system.com/#getting-started).

### React Navigation

Routing and navigation for your React Native apps Platform-specific look-and-feel with smooth animations and gestures.

### Wix React Native Notifications

Handle all the aspects of push notifications for your app, including remote and local notifications, interactive notifications, silent notifications, and more.

### react-native-keychain

Save and use credentials from phone's Keychain/Keystore

### react-native-permissions

A unified permissions API for React Native on iOS and Android. For iOS you have to the `Podfile` with permissions pod and update `Info.plist` with wanted permissions descriptions. For Android add wanted permissions in `AndroidManifest.xml`

### react-i18next

Localization using hooks. [React Native example](https://github.com/i18next/react-i18next/tree/master/example/react-native)

### Codepush

A React Native app is composed of JavaScript files and any accompanying images, which are bundled together by the packager and distributed as part of a platform-specific binary (i.e. an .ipa or .apk file). Once the app is released, updating either the JavaScript code (e.g. making bug fixes, adding new features) or image assets, requires you to recompile and redistribute the entire binary, which of course, includes any review time associated with the store(s) you are publishing to.

The CodePush plugin helps get product improvements in front of your end users instantly, by keeping your JavaScript and images synchronized with updates you release to the CodePush server. This way, your app gets the benefits of an offline mobile experience, as well as the "web-like" agility of side-loading updates as soon as they are available. It's a win-win!

### Crisp chat

A free alternative to Intercom or Zendesk, for startups and SMBs.
[Crisp chat](https://crisp.chat)

### Sentry

Benefitial in debugging issues that occur only in release builds. You can view error stack traces for unhandled exceptions. You can also choose to log specific errors in some catch blocks to study how often they occur in production.

### react-native-appstate-hook

Custom react hook, built to handle iOS or Android appState in your react component.

### react-native-file-logger

A simple file-logger for React Native with configurable rolling policy, based on CocoaLumberjack on iOS and Logback on Android.

### react-native-svg

Prefer using SVG over images all the time (remember to [optimize](https://jakearchibald.github.io/svgomg/) your SVGs).

### react-native-dotenv

Using environment variables in your React Native project

### AsyncStorage

For caching simple data such as user preferences.

### NetInfo

Network Info API for Android, iOS, macOS & Windows. It allows you to get information on:

- Connection type
- Connection quality

### FastImage

Replacement for the `<Image/>` component. Gives a performance boost and imaga preload.

### react-native-testing-library

For unit and component testing.

### Detox

For end-to-end testing.

### why-did-you-render

Fix avoidable re-renders

## Directory Structure

```
root
├── __tests__
├── android
├── ios
├── storybook
|   └── addons.js
|   └── index.js
|   └── rn_addons.js
└── src
    └── components
    |   └── LanguageButton
    |   |   └── index.tsx
    |   |   └── LanguageButton.tsx
    |   |   └── stories.tsx
    |   └── Counter.tsx
    |   └── CustomScreen.tsx
    |   └── CustomText.tsx
    |   └── StatusBar.tsx
    |   └── stories.ts
    └── hooks
    |   └── useCustomBackBehaviour.tsx
    |   └── useMockApi.tsx
    |   └── useNotification.tsx
    |   └── usePrevious.tsx
    └── localization
    |   └── resources
    |   |   └── en.json
    |   |   └── index.ts
    |   |   └── ro.json
    |   └── index.tsx
    └── modules
    |   └── auth
    |   |   └── hooks
    |   |   |   └── useKeychainBiometrics.tsx
    |   |   |   └── useKeychainCredentials.tsx
    |   |   |   └── useSupportedBiometry.tsx
    |   |   └── screens
    |   |   |   └── index.tsx
    |   |   |   └── Onboarding.tsx
    |   |   |   └── ResetPassword.tsx
    |   |   └── store
    |   |   |   └── index.ts
    |   └── <your_app_modules>
    └── navigation
    |   ├── navigatorMethods.tsx
    |   └── Router.tsx
    └── screens
    |   ├── CustomWebView.tsx
    |   ├── Home.tsx
    |   ├── index.ts
    |   └── NetworkError.tsx
    └── utils
        ├── colors.ts
        └── console.ts

```

## Credits

This template is modified from [react-native-typescript-template](https://github.com/react-native-community/react-native-template-typescript) and inspired from Osama Qarem's [React Native temaplate](https://github.com/osamaqarem/react-native-template)

Thank you ❤️
