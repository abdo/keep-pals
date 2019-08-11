import { Button, Text } from 'native-base';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import EnhancedView from '../../../../components/common/EnhancedView';
import MainTextarea from '../../../../components/common/MainTextArea';
import MainTextInput from '../../../../components/common/MainTextInput';

const AddFriendScreen = () => {
  return (
    <EnhancedView
      backgroundImageBlurRadius={1.4}
      keyboardVerticalOffset={-200}
      backgroundImageUrl='https://images.unsplash.com/photo-1495001258031-d1b407bc1776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    >
      <MainTextInput
        iconType='Entypo'
        iconName='emoji-happy'
        name='name'
        label="Friend's name"
      />
      <MainTextInput
        iconType='Entypo'
        iconName='location-pin'
        name='location'
        label="Friend's location"
      />
      <MainTextarea
        label="Friend's description"
        labelColor={colors.white}
        placeholder='Describe your new friend'
      />
      <Button
        primary
        style={{ width: '50%', justifyContent: 'center', alignSelf: 'center' }}
      >
        <Text>Add</Text>
      </Button>
    </EnhancedView>
  );
};

export default AddFriendScreen;
