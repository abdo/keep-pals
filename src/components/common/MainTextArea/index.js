import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import Textarea from 'react-native-textarea';

import { gaps, sizes, colors } from '../../../assets/styles/base';

const MainTextarea = ({
  initialValue,
  placeholder,
  label,
  labelColor,
  name,
  onChange,
}) => {
  const onChangeText = (value) => {
    onChange(name, value);
  };

  return (
    <View
      style={{
        alignSelf: 'center',
        width: sizes.mainContentWidth,
        marginVertical: gaps.md,
      }}
    >
      {label ? (
        <Text style={{ color: labelColor, fontWeight: 'bold' }}>{label}</Text>
      ) : null}
      <Textarea
        containerStyle={{
          width: '100%',
          height: 180,
          backgroundColor: colors.trueWhite,
          padding: 5,
          marginVertical: 5,
          borderColor: colors.primary,
          borderWidth: 2,
          borderRadius: 5,
        }}
        style={{ textAlignVertical: 'top', height: 170, color: colors.black }}
        onChangeText={onChangeText}
        defaultValue={initialValue}
        maxLength={200}
        placeholder={placeholder}
        underlineColorAndroid='transparent'
      />
    </View>
  );
};

MainTextarea.defaultProps = {
  onChange: () => null,
  name: 'textarea',
  placeholder: 'Type here',
  label: '',
  labelColor: colors.black,
  initialValue: '',
};

MainTextarea.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  initialValue: PropTypes.string,
};

export default MainTextarea;
