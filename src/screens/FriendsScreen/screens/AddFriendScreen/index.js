import React from 'react';
import EnhancedView from '../../../../components/common/EnhancedView';
import MainTextInput from '../../../../components/common/MainTextInput';

const AddFriendScreen = () => {
  return (
    <EnhancedView
      backgroundImageBlurRadius={1.4}
      keyboardVerticalOffset={-200}
      backgroundImageUrl='https://images.unsplash.com/photo-1499568509606-4f9b771232ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    >
      <MainTextInput />
    </EnhancedView>
  );
};

export default AddFriendScreen;
