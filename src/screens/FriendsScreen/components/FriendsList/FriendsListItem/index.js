import React from 'react';

import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import PropTypes from 'prop-types';
import { defaultFriendPictureLink } from '../../../../../assets/constants/general';

const FriendsListItem = ({
  name,
  description,
  location,
  pictureLink,
  onPress,
}) => {
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          source={{
            uri: pictureLink || defaultFriendPictureLink,
          }}
        />
      </Left>
      <Body>
        <Text>{name}</Text>
        {description ? (
          <Text note numberOfLines={1}>
            {description}
          </Text>
        ) : null}
        {location ? (
          <Text note numberOfLines={1} style={{ fontWeight: 'bold' }}>
            {location}
          </Text>
        ) : null}
      </Body>
      <Right>
        <Button transparent onPress={onPress}>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

FriendsListItem.defaultProps = {
  description: '',
  location: '',
  pictureLink: defaultFriendPictureLink,
  onPress: () => null,
};

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  location: PropTypes.string,
  pictureLink: PropTypes.string,
  onPress: PropTypes.func,
};

export default FriendsListItem;
