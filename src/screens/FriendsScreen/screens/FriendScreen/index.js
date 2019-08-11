import { Image } from 'react-native';
import { Text, Button, Icon, Card } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import { defaultFriendPictureLink } from '../../../../assets/constants/general';
import { sizes, colors, fontTypes } from '../../../../assets/styles/base';
import EnhancedView from '../../../../components/common/EnhancedView';
import FriendTabs from './components/Tabs';

const pale_background = require('../../../../assets/images/pale_background.jpg');

const reminders = [
  {
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
];

const stories = [
  {
    date: '3-12-2021',
    body:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates saepe nesciunt impedit eum vel quae omnis, rerum laboriosam vitae. Voluptatum officiis dolor incidunt rem voluptates eius, quos aliquam consectetur saepe.',
  },
  {
    date: '3-12-2021',
    body:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates saepe nesciunt impedit eum vel quae omnis, rerum laboriosam vitae. Voluptatum officiis dolor incidunt rem voluptates eius, quos aliquam consectetur saepe.',
  },
  {
    date: '3-12-2021',
    body:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates saepe nesciunt impedit eum vel quae omnis, rerum laboriosam vitae. Voluptatum officiis dolor incidunt rem voluptates eius, quos aliquam consectetur saepe.',
  },
  {
    date: '3-12-2021',
    body:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates saepe nesciunt impedit eum vel quae omnis, rerum laboriosam vitae. Voluptatum officiis dolor incidunt rem voluptates eius, quos aliquam consectetur saepe.',
  },
  {
    date: '3-12-2021',
    body:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates saepe nesciunt impedit eum vel quae omnis, rerum laboriosam vitae. Voluptatum officiis dolor incidunt rem voluptates eius, quos aliquam consectetur saepe.',
  },
  {
    date: '3-12-2021',
    body:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates saepe nesciunt impedit eum vel quae omnis, rerum laboriosam vitae. Voluptatum officiis dolor incidunt rem voluptates eius, quos aliquam consectetur saepe.',
  },
];

const FriendScreen = ({ navigation }) => {
  const friend = navigation.getParam('friend', {});

  return (
    <EnhancedView
      backgroundImagePath={pale_background}
      backgroundImageBlurRadius={1}
      style={{ alignItems: 'center', marginTop: 20 }}
    >
      <Text style={{ fontFamily: fontTypes.main }}>{friend.name}</Text>
      <Image
        source={{ uri: friend.pictureLink || defaultFriendPictureLink }}
        style={{ width: 200, height: 200, marginTop: 20, borderRadius: 20 }}
      />
      <Button style={{ marginTop: 20, maxWidth: sizes.mainContentWidth }}>
        <Icon type='Entypo' name='location-pin' />
        <Text>{friend.location}</Text>
      </Button>
      <Card
        style={{
          maxWidth: sizes.mainContentWidth,
          padding: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: colors.black,
            fontFamily: fontTypes.main,
          }}
        >
          {friend.description}
        </Text>
      </Card>
      <FriendTabs reminders={reminders} stories={stories} />
    </EnhancedView>
  );
};

FriendScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('friend').name,
});

FriendScreen.defaultProps = {
  navigation: {},
};

FriendScreen.propTypes = {
  navigation: PropTypes.shape({ getParam: PropTypes.func }),
};

export default FriendScreen;
