module.exports = {
  presets: [
    '@babel/preset-react', // add this line
    'babel-preset-expo', // keep this if you use Expo!
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
    ],
    'react-native-reanimated/plugin',
  ],
};