import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {scaleFontSize} from '../assets/styles/scaling';
import {getFontFamily} from '../utils/fontHelper';

export default function Headline({title = 'No header', size, color}) {
  const styleToapply = () => {
    switch (size) {
      case 'md':
        return styles.title4;
      case 'lg':
        return styles.title5;
      default:
        return styles.title1;
    }
  };
  console.log(color)

  return <Text style={[styleToapply(), color && {color: color}]}>{title}</Text>;
}

const styles = StyleSheet.create({
  title4: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    color: 'black',
  },
  title1: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(29),
    color: 'black',
  },
});
