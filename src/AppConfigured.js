import { Root } from 'native-base';
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

import { loadFonts } from './assets/styles/fonts/loadFonts';
import EnhancedView from './components/common/EnhancedView';
import MainNavigator from './routes/MainNavigator';

// This is the main app, with these configured:
// 1- Native Base
// 2- Enhanced View main container

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
        <MainNavigator />
      </EnhancedView>
    </Root>
  );
};

export default AppConfigured;
