import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native';
import React from 'react';

import { colors } from '../assets/styles/base';
import tabNavigator from './TabNavigator';
import screens from '../screens';

const RootStack = createStackNavigator(
  {
    Tab: tabNavigator,
    Friend: screens.FriendScreen,
  },
  {
    initialRouteName: 'Tab',

    defaultNavigationOptions: ({ navigation }) => {
      // --first, we check which screen it is:
      const screen = navigation.state.routeName;

      // values we will modify then return:
      let headerTitle = '';
      let headerRight = '';
      const headerLeft = '';
      let headerStyle = {
        backgroundColor: colors.primary,
      };
      const headerTitleStyle = {
        color: colors.white,
      };
      const tabBarVisible = true;
      // and so on...

      // For each screen:
      if (screen === 'Tab') {
        const { routes, index } = navigation.state;
        const tabScreen = routes[index].routeName;

        if (tabScreen === 'tabScreen1') {
          headerTitle = 'Reminders';

          headerRight = (
            <Text
              style={{ marginRight: 20, fontSize: 20, color: colors.secondary }}
            />
          );
          headerStyle = {
            backgroundColor: colors.primary,
          };
        }

        if (tabScreen === 'tabScreen2') {
          headerTitle = 'Friends';

          headerRight = (
            <Text
              style={{ marginRight: 20, fontSize: 20, color: colors.secondary }}
            />
          );
          headerStyle = {
            backgroundColor: colors.primary,
          };
        }

        // Return these in case of tab screens
        return {
          tabBarVisible,
          headerStyle,
          headerTitle,
          headerRight,
          headerLeft,
          headerTitleStyle,
          // and so on..
        };
      }

      // Return these for other screens
      return {
        headerRight,
        headerStyle,
        headerTitleStyle,
      };
    },
  },
);

export default createAppContainer(RootStack);
