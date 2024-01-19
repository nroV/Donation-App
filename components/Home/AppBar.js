import React from 'react';
import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import Headline from '../Header';
import { verticalScale } from '../../assets/styles/scaling';

export default function AppBar({displayName, profileImg}) {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text>Hello,</Text>
        <Headline size={'md'} title={displayName + '👋'} />
      </View>

      <Pressable style={styles.imageOuterContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: profileImg,
          }}
          style={styles.img}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  img: {
    width: '100%',
  
    height: verticalScale(50),
  },
  imageOuterContainer: {
    // backgroundColor: 'grey',
    width: '100%',
  
  },
});
