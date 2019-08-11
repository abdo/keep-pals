import { Button, Text, Icon } from 'native-base';
import { Image } from 'react-native';
import React, { useState } from 'react';

import { arrayHasEmptyValue } from '../../../../helpers/isEmpty';
import { colors } from '../../../../assets/styles/base';
import { ensureCameraRollPermission } from '../../../../helpers/ensurePermissions';
import EnhancedView from '../../../../components/common/EnhancedView';
import MainTextarea from '../../../../components/common/MainTextArea';
import MainTextInput from '../../../../components/common/MainTextInput';
import pickImage from '../../../../helpers/pickImage';
import uploadImage from '../../../../helpers/uploadImage';

const AddFriendScreen = () => {
  const [friend, setFriend] = useState({
    name: '',
    location: '',
    description: '',
    pictureLink: '',
  });

  const pickPicture = async () => {
    const pictureLocalPath = await pickImage();
    setFriend({ ...friend, pictureLink: pictureLocalPath });
  };

  const onAddFriend = async () => {
    // startLoading();

    if (friend.pictureLink) {
      const localPath = friend.pictureLink;
      const url = await uploadImage(localPath, 'friends', 'test');
      setFriend({ ...friend, pictureLink: url });
    }

    // const callback = () => {
    //   QuickHint('Meal Successfully created');
    //   getAllMeals();
    //   navigation.navigate('tabScreen1');
    // };

    // createMeal(meal, callback);
  };

  const onChangeInput = (name, value) => {
    setFriend({ ...friend, [name]: value });
  };

  const { pictureLink, ...friendWithoutPictureLink } = friend;

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
        onChange={onChangeInput}
      />
      <MainTextInput
        iconType='Entypo'
        iconName='location-pin'
        name='location'
        label="Friend's location"
        onChange={onChangeInput}
      />
      <MainTextarea
        label="Friend's description"
        name='description'
        labelColor={colors.white}
        placeholder='Describe your new friend'
        onChange={onChangeInput}
      />

      <Button
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        onPress={() => ensureCameraRollPermission(pickPicture)}
      >
        <Icon type='FontAwesome' name='picture-o' size={15} />
        <Text>Pick Image</Text>
      </Button>

      {friend.pictureLink ? (
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 20,
          }}
          source={{ uri: friend.pictureLink }}
        />
      ) : null}

      <Button
        onPress={onAddFriend}
        disabled={arrayHasEmptyValue(Object.values(friendWithoutPictureLink))}
        style={{
          width: '50%',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}
      >
        <Text>Add</Text>
      </Button>
    </EnhancedView>
  );
};

AddFriendScreen.navigationOptions = {
  title: 'Add a new friend',
};

export default AddFriendScreen;
