import { Text, Button } from 'native-base';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { dimensions } from '../../../../../../assets/styles/base';
import { isValueEmpty } from '../../../../../../helpers/isEmpty';
import EnhancedView from '../../../../../../components/common/EnhancedView';
import MainTextarea from '../../../../../../components/common/MainTextArea';

const AddStoryScreen = ({ navigation }) => {
  const [story, setStory] = useState('');

  const onChangeInput = (name, value) => {
    setStory(value);
  };

  const onSubmit = () => {
    // request for submitting story
    // request for refetching friend, stories, and reminders

    navigation.goBack();
  };

  return (
    <EnhancedView backgroundImageUrl='https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'>
      <MainTextarea
        label={`What's your latest story with ${navigation.getParam(
          'friendName',
        )}?`}
        height={dimensions.fullWidth}
        name='story'
        onChange={onChangeInput}
      />
      <Button
        onPress={onSubmit}
        disabled={isValueEmpty(story)}
        style={{
          width: '50%',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}
      >
        <Text>Add Story</Text>
      </Button>
    </EnhancedView>
  );
};

AddStoryScreen.navigationOptions = ({ navigation }) => ({
  title: `New story for ${navigation.getParam('friendName')}`,
});

AddStoryScreen.defaultProps = {
  navigation: {},
};

AddStoryScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    goBack: PropTypes.func,
  }),
};

export default AddStoryScreen;
