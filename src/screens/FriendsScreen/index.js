import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import React from 'react';

const FriendsScreen = () => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://avatars0.githubusercontent.com/u/33037931?s=460&v=4',
                }}
              />
            </Left>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default FriendsScreen;
