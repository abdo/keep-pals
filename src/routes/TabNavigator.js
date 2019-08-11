import { createMaterialTopTabNavigator } from 'react-navigation';
import { Text } from 'native-base';
import React from 'react';

import { colors, sizes } from '../assets/styles/base';
import FriendsScreen from '../screens/FriendsScreen';
import RemindersScreen from '../screens/RemindersScreen';

export default createMaterialTopTabNavigator(
  {
    // --specific navigationOptions for each tab
    tabScreen1: {
      screen: RemindersScreen,
      navigationOptions: {
        tabBarLabel: 'Reminders',
        tabBarIcon: ({ tintColor }) => <Text style={{ fontSize: 20 }}>🔔</Text>,
      },
    },
    tabScreen2: {
      screen: FriendsScreen,
      navigationOptions: {
        tabBarLabel: 'Friends',
        tabBarIcon: ({ tintColor }) => <Text style={{ fontSize: 20 }}>❤️</Text>,
      },
    },
  },
  {
    // Config

    initialRouteName: 'tabScreen1',
    order: ['tabScreen1', 'tabScreen2'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,

    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      upperCaseLabel: false,
      activeTintColor: colors.white,
      inactiveTintColor: colors.secondary,

      style: {
        backgroundColor: colors.primary,
        height: sizes.bottomTabHeight,
        borderTopWidth: 0.5,
        borderTopColor: '#00000000',
      },
      labelStyle: {
        fontSize: 18,
      },
      iconStyle: {},
      indicatorStyle: {
        backgroundColor: colors.secondary,
      },
    },
  },
);
