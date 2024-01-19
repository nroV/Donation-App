import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';

import Headline from './Header';
import Badge from './Badge';
import {verticalScale} from '../assets/styles/scaling';

export default function SingleDonationItem({
  id,
  imgUri = 'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg',
  badgeTitle,
  donationTitle,
  price,
  onPress,
}) {
  return (
    <Pressable style={{flex: 1}} onPress={onPress.bind(this, id, badgeTitle)}>
      <View
        style={{
          borderRadius: 20,
        }}>
        <View style={{position: 'absolute', zIndex: 1, top: 13}}>
          <Badge title={badgeTitle} />
        </View>
        <Image
          source={{uri: imgUri}}
          style={styles.imgContainer}
          resizeMode="cover"
        />
      </View>

      <View>
        <View style={styles.gapSize}>
          <Headline title={donationTitle} size={'md'} color={'#0A043C'} />
        </View>
        <View>
          <Headline title={`$ ${price}`} size={'sm'} color={'#156CF7'} />
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  gapSize: {
    marginTop: 16,
  },
  innerContainer: {
    backgroundColor: '#D9D9D9',
  },
  imgContainer: {
    width: '100%',
    height: verticalScale(170),
    borderRadius: 15,
  },
});
