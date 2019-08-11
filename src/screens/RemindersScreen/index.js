import { Text, Card, Badge, Button, View } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { gaps, sizes, fontTypes, colors } from '../../assets/styles/base';
import EnhancedView from '../../components/common/EnhancedView';
import { defaultFriendPictureLink } from '../../assets/constants/general';

const reminders = [
  {
    friend: {
      name: 'Ahmed',
      location: 'Brazil',
      description:
        'eodjonc ewj oj oje oewj oejr voejrn vojen vojn ove fokn okn vok',
      pictureLink:
        'https://udemy-images.udemy.com/course/480x270/2433278_c4ab_3.jpg',
    },
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    friend: {
      name: 'Ahmed',
      location: 'Brazil',
      description:
        'eodjonc ewj oj oje oewj oejr voejrn vojen vojn ove fokn okn vok',
      pictureLink:
        'https://udemy-images.udemy.com/course/480x270/2433278_c4ab_3.jpg',
    },
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    friend: {
      name: 'Ahmed',
      location: 'Brazil',
      description:
        'eodjonc ewj oj oje oewj oejr voejrn vojen vojn ove fokn okn vok',
      pictureLink:
        'https://udemy-images.udemy.com/course/480x270/2433278_c4ab_3.jpg',
    },
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    friend: {
      name: 'Ahmed',
      location: 'Brazil',
      description:
        'eodjonc ewj oj oje oewj oejr voejrn vojen vojn ove fokn okn vok',
      pictureLink:
        'https://udemy-images.udemy.com/course/480x270/2433278_c4ab_3.jpg',
    },
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
  {
    friend: {
      name: 'Ahmed',
      location: 'Brazil',
      description:
        'eodjonc ewj oj oje oewj oejr voejrn vojen vojn ove fokn okn vok',
      pictureLink:
        'https://udemy-images.udemy.com/course/480x270/2433278_c4ab_3.jpg',
    },
    date: '1-10-2020',
    title: 'You gotta contact marwa',
    body: 'Marwa is the one you need to contact',
  },
];

const RemindersScreen = ({ navigation }) => {
  return (
    <EnhancedView>
      {reminders.length === 0 ? (
        <Text note style={{ alignSelf: 'center', marginTop: gaps.lg }}>
          No reminders yet
        </Text>
      ) : null}
      {reminders.map((reminder) => (
        <Card
          key={Math.random().toString()}
          style={{
            width: sizes.mainContentWidth,
            padding: 20,
            alignSelf: 'center',
          }}
        >
          <Badge success style={{ alignSelf: 'flex-end' }}>
            <Text>{reminder.date}</Text>
          </Badge>
          <Text style={{ fontFamily: fontTypes.main }}>{reminder.title}</Text>
          <Text style={{ color: colors.black, marginTop: 20 }}>
            {reminder.body}
          </Text>
          <View note style={{ marginTop: 20 }}>
            <Button
              transparent
              onPress={() =>
                navigation.navigate('Friend', { friend: reminder.friend })
              }
              style={{ justifyContent: 'flex-start' }}
            >
              <Text uppercase={false}>
                For your friend: {reminder.friend.name}
              </Text>
              <Image
                source={{
                  uri: reminder.friend.pictureLink || defaultFriendPictureLink,
                }}
                style={{ width: 30, height: 30, borderRadius: 3 }}
              />
            </Button>
          </View>
        </Card>
      ))}
    </EnhancedView>
  );
};

RemindersScreen.defaultProps = {
  navigation: {},
};

RemindersScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
};

export default RemindersScreen;
