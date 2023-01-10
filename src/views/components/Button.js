import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press, disabled}) {
  return (
    <TouchableOpacity
      onPress={Press}
      disabled={disabled}
      style={{
        backgroundColor: bgColor,
        borderRadius: 12,
        height: 54,
        paddingVertical: 5,
        marginVertical: 10,
        marginHorizontal: 10,
      }}>
      <Text
        style={{
          color: textColor,
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
