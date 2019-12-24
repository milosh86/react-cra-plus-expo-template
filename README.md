# react-cra-plus-expo-template

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