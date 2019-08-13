import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon, Button } from 'native-base';
import React from 'react';

import { colors } from '../assets/styles/base';
import screens from '../screens';
import tabNavigator from './TabNavigator';

const RootStack = createStackNavigator(
  {
    Tab: tabNavigator,
    Friend: screens.FriendScreen,
    AddFriend: screens.AddFriendScreen,
    ArchivedFriends: screens.ArchivedFriendsScreen,
    AddStory: screens.AddStoryScreen,
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

          headerStyle = {
            backgroundColor: colors.primary,
          };
        }

        if (tabScreen === 'tabScreen2') {
          headerTitle = 'Friends';

          headerRight = (
            <Button
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate('AddFriend')}
            >
              <Icon type='AntDesign' name='pluscircle' />
            </Button>
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
