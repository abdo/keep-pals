import { Container, Content } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';

import FriendsList from './components/FriendsList';

const FriendsScreen = ({ navigation }) => {
  const onPressFriendListItem = (friend) => {
    navigation.navigate('Friend', {
      friend,
    });
  };

  return (
    <Container>
      <Content>
        <FriendsList onPressFriendListItem={onPressFriendListItem} />
      </Content>
    </Container>
  );
};

FriendsScreen.defaultProps = {
  navigation: {},
};

FriendsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
};

export default FriendsScreen;
