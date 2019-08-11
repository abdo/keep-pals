import React from 'react';
import { List, Text, View } from 'native-base';
import FriendsListItem from './FriendsListItem';
import { gaps } from '../../../assets/styles/base';

const friendsList = [
  {
    name: 'Ahmed',
    description: 'wkfjn nowd vowk cokwe voke ockw rockwencoekwv owekc oe',
    locatoin: 'Efvker, dvoev k',
    pictureLink: 'https://avatars0.githubusercontent.com/u/33037931?s=460&v=4',
  },
  {
    name: 'Ahmed',
    description: 'wkfjn nowd vowk cokwe voke ockw rockwencoekwv owekc oe',
    locatoin: 'Efvker, dvoev k',
    pictureLink: 'https://avatars0.githubusercontent.com/u/33037931?s=460&v=4',
  },
  {
    name: 'Ahmed',
    description: 'wkfjn nowd vowk cokwe voke ockw rockwencoekwv owekc oe',
    locatoin: 'Efvker, dvoev k',
    pictureLink:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGbIWhp7105fAFf25a8kSxPQOEUUawmnlkWz0l9BcsV4NMl9MZQ',
  },
  {
    name: 'Ahmed',
    description: 'wkfjn nowd vowk cokwe voke ockw rockwencoekwv owekc oe',
    locatoin: 'Efvker, dvoev k',
    pictureLink: 'https://avatars0.githubusercontent.com/u/33037931?s=460&v=4',
  },
  {
    name: 'Ahmed',
    description: 'wkfjn nowd vowk cokwe voke ockw rockwencoekwv owekc oe',
    locatoin: 'Efvker, dvoev k',
    pictureLink: '',
  },
  {
    name: 'Ahmed',
    description: 'wkfjn nowd vowk cokwe voke ockw rockwencoekwv owekc oe',
    locatoin: 'Efvker, dvoev k',
    pictureLink: 'https://avatars0.githubusercontent.com/u/33037931?s=460&v=4',
  },
];

const FriendsList = () => {
  if (friendsList.length === 0) {
    return (
      <View
        style={{
          alignItems: 'center',
          marginTop: gaps.lg,
        }}
      >
        <Text note>No friends yet</Text>
      </View>
    );
  }

  return (
    <List>
      {friendsList.map((friend) => (
        <FriendsListItem
          name={friend.name}
          description={friend.description}
          location={friend.locatoin}
          pictureLink={friend.pictureLink}
          key={Math.random().toString()}
        />
      ))}
    </List>
  );
};

export default FriendsList;
