import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

import COLORS from '../../constants/colors';

const Input = ({
  label,
  iconName,
  error,
  iconVisibilty,
  onFocus = () => {},
  ...props
}) => {
  const [showIcon, setShowIcon] = React.useState(iconVisibilty);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.black,
            alignItems: 'center',
          },
        ]}>
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={{color: COLORS.black, flex: 1}}
          placeholderTextColor={COLORS.placeholderText}
          {...props}
        />
        {showIcon && (
          <Image
            style={{height: 30, width: 30}}
            source={require('../../assets/checkmark.png')}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.label,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: COLORS.black,
    borderRadius: 6,
  },
});

export default Input;
