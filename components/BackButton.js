import React from 'react';

import {Pressable, StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import {horizontalScale} from '../assets/styles/scaling';
const BackButton = props => {
  return (
    <View
      style={{
        marginHorizontal: 8,
        marginVertical: 10,
      }}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default BackButton;
