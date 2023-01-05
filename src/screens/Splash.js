import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { THEME_COLOR } from '../string';


const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  }, []);
  return (
    <View style={mystyles.container}>
      <StatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
      <Image source={require('../images/logo.png')} style={mystyles.logo} />
    </View>
  );
};

export default Splash;
const mystyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: responsiveWidth(70),
    height: responsiveWidth(70),
  },
});