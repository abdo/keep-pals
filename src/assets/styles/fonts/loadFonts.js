import * as Font from 'expo-font';

const loadAllFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export const loadFonts = loadAllFonts([
  // Native Base Fonts
  {
    Roboto: require('./Roboto.ttf'),
  },
  {
    Roboto_medium: require('./Roboto-Medium.ttf'),
  },
  {
    LexendDeca: require('./LexendDeca.ttf'),
  },
]);
