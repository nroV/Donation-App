import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {scaleFontSize} from '../assets/styles/scaling';
import {getFontFamily} from '../utils/fontHelper';

export default function Buttons({label, onPress, isDisable = false}) {
  return (
    <Pressable
      style={[styles.outerContainer, isDisable && styles.disableButton]}
      disabled={isDisable}
      onPress={onPress}>
      <View>
        <Text style={styles.btnText}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#2979F2',
    borderRadius: 50,
    paddingVertical: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disableButton: {
    opacity: 0.5,
  },
  btnText: {
    color: '#FFF',
    lineHeight: scaleFontSize(19),
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
  },
});
