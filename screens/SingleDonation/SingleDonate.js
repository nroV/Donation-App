/* eslint-disable react-hooks/exhaustive-deps */
import {useRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BackButton from '../../components/BackButton';
import {updateSelectedDonationId} from '../../redux/reducers/Donation';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyle from '../../assets/styles/globalStyle';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';
import Badge from '../../components/Badge';
import Headline from '../../components/Header';
import Buttons from '../../components/Button';
// import {selectDonate} from '../../redux/reducers/Donation';

export default function SingleDonate({navigation}) {
  const params = useRoute().params;
  const donations = useSelector(state => state.donation);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(updateSelectedDonationId(params?.id));
  }, [params]);
  const donationDetail = donations.selectedDonation;
  //this is new
  console.log('donation detail', donationDetail);
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundWhite]}>
      {/* <BackButton onPress={() => navigation.goBack()} /> */}
      <ScrollView
        style={style.outerContainer}
        showsVerticalScrollIndicator={false}>
        <View style={style.gapItem}>
          <Image
            style={style.imgContainer}
            source={{
              uri: donationDetail?.image,
            }}
          />
        </View>
        <View style={style.gapItem}>
          <Badge title={params.badgeTitle} />
        </View>

        <View style={style.gapItem}>
          <Headline title={donationDetail.name} size={'md'} color={'#022150'} />
        </View>

        <Text style={[style.bodyText, style.gapItem]}>
          {donationDetail.description} {donationDetail.description}{' '}
          {donationDetail.description} {donationDetail.description}
        </Text>
      </ScrollView>
      <View style={style.spaceButton}>
        <Buttons label={'Donate'} onPress={{}} />
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 20,
    flexDirection: 'column',
  },
  spaceButton: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  gapItem: {
    marginBottom: 25,
  },
  bodyText: {
    fontSize: scaleFontSize(14),
    lineHeight: verticalScale(22),
    color: '#022150',
  },
  imgContainer: {
    width: '100%',
    height: verticalScale(240),
  },
});
