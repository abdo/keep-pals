import { Root } from 'native-base';
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

import { loadFonts } from './assets/styles/fonts/loadFonts';
import EnhancedView from './components/common/EnhancedView';

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
      <EnhancedView isLoading={!fontLoaded}>
        <Text>Open up App.js to start working on your app!</Text>
      </EnhancedView>
    </Root>
  );
};

export default AppConfigured;
