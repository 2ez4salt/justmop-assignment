import React from 'react';
import {View, ActivityIndicator, Image} from 'react-native';

export default function Loading() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
      }}>
      <Image source={require('./../../Assets/cropped-unscreen.gif')} />
    </View>
  );
}
