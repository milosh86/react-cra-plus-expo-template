# react-cra-plus-expo-template

## Getting Started
1. in the root, run "yarn install", it will install all dependencies from packages folder
2. go to packages/web or packages/native and run "yarn start"

If files in packages/common are changed, it is immediately reflected in native and web projects  

## CRA setup
1. yarn add customize-cra react-app-rewired --dev
2. Update scripts in package.json to use react-app-rewired instead of react-scripts
3. create config-overrides.js in the project root

## Expo setup
1. expo init packages/native
2. https://github.com/expo/expo/tree/master/packages/expo-yarn-workspaces
3. to native/package.json, add: 	
"workspaces": {
    "nohoist": ["**"]
 },
4. Run expo start --clear

## Yarn workspaces
* https://www.smashingmagazine.com/2019/07/yarn-workspaces-organize-project-codebase-pro/
* https://yarnpkg.com/lang/en/docs/workspaces/
* https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/
* https://yarnpkg.com/blog/2018/05/18/focused-workspaces/
* https://github.com/codedailyio/yarn-workspaces-web-native/blob/master/packages/web/config-overrides.js
* https://github.com/expo/expo/tree/master/packages/expo-yarn-workspaces