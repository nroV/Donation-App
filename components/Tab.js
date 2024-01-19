import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {horizontalScale, scaleFontSize} from '../assets/styles/scaling';
import {getFontFamily} from '../utils/fontHelper';

export default function Tab({label, onPress, isActive = true}) {
  const [widths, setWidths] = useState(0);
  const tabWidth = {
    width: widths + 33 * 2,
  };
  const textRef = useRef(null);

  return (
    <Pressable
      style={[
        styles.outerContainer,
        tabWidth,
        !isActive && styles.disableButton,
      ]}
    
      onPress={onPress}>
      <View>
        <Text
          ref={textRef}
          onTextLayout={event => {
            // console.log(event.nativeEvent.lines[0].width);
            setWidths(event.nativeEvent.lines[0].width);
          }}
          style={styles.btnText}>
          {label}
        </Text>
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
