# react-native-template

An opinionated template with all the packages that take more than one `yarn add` to setup.

Preconfigured with

- TypeScript
- [React Query](https://github.com/tannerlinsley/react-query) for api calls
- [Zustand](https://github.com/pmndrs/zustand) instead of Redux
- [styled-components](https://github.com/styled-components/styled-components)
- [styled-system](https://github.com/styled-system/styled-system)
- [React Navigation](https://reactnavigation.org/) (**v5**) for navigation.
- [Sentry](https://github.com/getsentry/sentry-react-native) for debugging in production.
- [react-native-svg](https://github.com/react-native-community/react-native-svg) because svg.
- react-native-dotenv
- [AsyncStorage](https://github.com/react-native-community/async-storage) you're gonna install it anyway.
- [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo) Network Info API for Android, iOS, macOS & Windows
- [FastImage](https://github.com/DylanVann/react-native-fast-image) its more performant
- [Detox](https://github.com/wix/Detox) for e2e.

## Contents

- [Documentation](#documentation)
- [Getting Started](#getting-started)
- [Optional Steps](#optional-steps)
- [Credits](#credits)

## Documentation

- [Libraries](#libraries)
- [Directory Structure](#directory-structure)
- [Quick Overview](#quick-overview)
- [File Walkthrough](./docs/file-walkthrough.md)

## Getting Started

Create a new project using the template.

- **Note:** the command will fail if you have the global legacy react-native-cli installed. Make sure you uninstall it first. More info at [react-native-community/cli](https://github.com/react-native-community/cli#about).

### RN 0.63.4

```bash
$ npx react-native init MyApp --template @gabrielmoncea/react-native-template
```

## Optional Steps

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

## Libraries

Let's briefly go over the benefit of each library included in this template.

### TypeScript

For type safety ¯\\_(ツ)_/¯

But in all seriousness, if you are considering this template I assume you are a TypeScript fan. If you happen to be a JavaScript user, this template might be overwhelming. If you would like to start learning TypeScript, I suggest bootstrapping with this instead [react-native-community/react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript) so you can learn at your own pace.

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

### Sentry

Benefitial in debugging issues that occur only in release builds. You can view error stack traces for unhandled exceptions. You can also choose to log specific errors in some catch blocks to study how often they occur in production.

### react-native-svg

Prefer using SVG over images all the time (remember to [optimize](https://jakearchibald.github.io/svgomg/) your SVGs).

### react-native-dotenv

Using environment variables in your React Native project

### AsyncStorage

For caching simple data such as user preferences.

### NetInfo

Network Info API for Android, iOS, macOS & Windows. It allows you to get information on:
* Connection type
* Connection quality

### FastImage

Replacement for the `<Image/>` component. Gives a performance boost and imaga preload.

### Detox

For end-to-end testing.

## Directory Structure

```
root
├── __tests__
├── android
├── ios
└── src
    └── components
    |   └── CustomText.ts
    └── navigation
    |   ├── RootNavigation.tsx
    |   └── Router.tsx
    └── screens
    |   ├── CustomWebView.tsx
    |   ├── Home.tsx
    |   └── NetworkError.tsx
    └── utils
        ├── colors.ts
        └── console.ts

```

## Credits

This template is modified from [react-native-typescript-template](https://github.com/react-native-community/react-native-template-typescript) and inspired from Osama Qarem's [React Native temaplate](https://github.com/osamaqarem/react-native-template)

Thank you ❤️
