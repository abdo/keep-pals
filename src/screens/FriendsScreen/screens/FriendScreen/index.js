import { Image } from 'react-native';
import { Text, Button, Icon, Card } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import { defaultFriendPictureLink } from '../../../../assets/constants/general';
import EnhancedView from '../../../../components/common/EnhancedView';
import { sizes, colors, fontTypes } from '../../../../assets/styles/base';

const pale_background = require('../../../../assets/images/pale_background.jpg');

const FriendScreen = ({ navigation }) => {
  const friend = navigation.getParam('friend', {});

  return (
    <EnhancedView
      backgroundImagePath={pale_background}
      backgroundImageBlurRadius={1}
      style={{ alignItems: 'center', marginTop: 20 }}
    >
      <Text style={{ fontWeight: 'bold' }}>{friend.name}</Text>
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
    </EnhancedView>
  );
};

FriendScreen.defaultProps = {
  navigation: {},
};

FriendScreen.propTypes = {
  navigation: PropTypes.shape({ getParam: PropTypes.func }),
};

export default FriendScreen;
