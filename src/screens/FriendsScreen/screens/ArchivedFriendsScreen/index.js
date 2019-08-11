import { Container, Content, Badge, Text } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import FriendsList from '../../components/FriendsList';
import { sizes, fontSizes } from '../../../../assets/styles/base';

const ArchivedFriendsScreen = ({ navigation }) => {
  const onPressFriendListItem = (friend) => {
    navigation.navigate('Friend', {
      friend,
    });
  };

  return (
    <Container>
      <Content>
        <Badge
          primary
          style={{ width: sizes.mainContentWidth, alignSelf: 'center' }}
        >
          <Text style={{ fontSize: fontSizes.sm }}>
            You don't get notifications about archived friends
          </Text>
        </Badge>
        <FriendsList onPressFriendListItem={onPressFriendListItem} />
      </Content>
    </Container>
  );
};

ArchivedFriendsScreen.navigationOptions = {
  title: 'Archived Friends',
};

ArchivedFriendsScreen.defaultProps = {
  navigation: {},
};

ArchivedFriendsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
};

export default ArchivedFriendsScreen;
