import { Container, Content, ListItem, Text, Button, Icon } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';

import FriendsList from './components/FriendsList';
import { sizes } from '../../assets/styles/base';

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
        <ListItem>
          <Button
            onPress={() => navigation.navigate('ArchivedFriends')}
            transparent
            style={{ width: sizes.mainContentWidth }}
          >
            <Text>Archived Friends</Text>
            <Icon name='arrow-forward' />
          </Button>
        </ListItem>
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
