const { createMetroConfiguration } = require('expo-yarn-workspaces');
const nodeLibs = require('node-libs-react-native')
const config = createMetroConfiguration(__dirname);

// add node.js modules that are not available by default in RN
config.resolver.extraNodeModules = {
  ...nodeLibs,
  ...config.resolver.extraNodeModules
};

module.exports = config;