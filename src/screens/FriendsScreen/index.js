import { Container, Content } from 'native-base';
import React from 'react';

import FriendsList from './FriendsList';

const FriendsScreen = () => {
  return (
    <Container>
      <Content>
        <FriendsList />
      </Content>
    </Container>
  );
};

export default FriendsScreen;
