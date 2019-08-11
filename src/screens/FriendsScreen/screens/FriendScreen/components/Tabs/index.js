import { Text, Icon, Tab, Tabs, TabHeading, Card, Badge } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import { sizes, colors, fontTypes } from '../../../../../../assets/styles/base';

const FriendTabs = ({ stories, reminders }) => {
  return (
    <Tabs style={{ marginTop: 20, width: sizes.mainContentWidth }}>
      <Tab
        heading={
          <TabHeading style={{ backgroundColor: colors.primary }}>
            <Icon name='camera' />
            <Text>Stories</Text>
          </TabHeading>
        }
      >
        {stories.length === 0 ? (
          <Card style={{ padding: 20, margin: 10 }}>
            <Text>No stories yet</Text>
          </Card>
        ) : null}

        {stories.map((story) => (
          <Card
            style={{ padding: 20, margin: 10 }}
            key={Math.random().toString()}
          >
            <Badge info style={{ alignSelf: 'flex-end' }}>
              <Text>{story.date}</Text>
            </Badge>
            <Text style={{ color: colors.black }}>{story.body}</Text>
          </Card>
        ))}
      </Tab>
      <Tab
        heading={
          <TabHeading style={{ backgroundColor: colors.primary }}>
            <Icon type='Ionicons' name='ios-notifications' />
            <Text>Reminders</Text>
          </TabHeading>
        }
      >
        {reminders.length === 0 ? (
          <Card style={{ padding: 20, margin: 10 }}>
            <Text>No reminders yet</Text>
          </Card>
        ) : null}
        {reminders.map((reminder) => (
          <Card
            style={{ padding: 20, margin: 10 }}
            key={Math.random().toString()}
          >
            <Badge warning style={{ alignSelf: 'flex-end' }}>
              <Text>{reminder.date}</Text>
            </Badge>
            <Text style={{ fontFamily: fontTypes.main }}>{reminder.title}</Text>
            <Text style={{ color: colors.black, marginTop: 20 }}>
              {reminder.body}
            </Text>
          </Card>
        ))}
      </Tab>
    </Tabs>
  );
};

FriendTabs.defaultProps = {
  stories: [],
  reminders: [],
};

FriendTabs.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({})),
  reminders: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FriendTabs;
