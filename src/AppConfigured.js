import { Root } from 'native-base';
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

import { loadFonts } from './assets/styles/fonts/loadFonts';

// This is the main app, with these configured:
// 1- Native Base

const AppConfigured = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadAssetsAsync();
  }, []);

  const loadAssetsAsync = async () => {
    await Promise.all(loadFonts);

    setFontLoaded(true);
  };

  if (!fontLoaded) {
    return <View />;
  }

  return (
    <Root>
      <Text>Open up App.js to start working on your app!</Text>
    </Root>
  );
};

export default AppConfigured;
