import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { THEME_COLOR } from '../string';
import Tabs1 from '../tabs/Tabs1';
import Tabs2 from '../tabs/Tabs2';
import Tabs3 from '../tabs/Tabs3';

const MainScreen = () => {
  const [selectedTab, setselectedTab] = useState(0)
  return (
    <View style={Styles.container}>
      {selectedTab == 0?(<Tabs1 />):selectedTab==1?(<Tabs2 />):(<Tabs3 />)}
      <View style={Styles.BottomNavigationView}>
        <TouchableOpacity style={Styles.tab} on onPress={() => {
          setselectedTab(0)
        }}>
          <View style={{
            borderTopWidth: 2,
            borderTopColor: selectedTab == 0 ? THEME_COLOR : "#fff",
            justifyContent: 'center',
            alignItems: 'center',
            height: '110%',
            width: '60%'
          }} >
            <Image
              source={require('../images/delivery-man.png')}
              style={[Styles.tabIcon, { tintColor: selectedTab == 0 ? THEME_COLOR : "#8e8e8e" },]}
            />
            <Text style={{ color: "#000", marginBottom: 2, tintColor: selectedTab == 0 ? THEME_COLOR : '#8e8e8e' }}>Delivery</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={Styles.tab} on onPress={() => {
          setselectedTab(1)
        }}>
          <View style={{
            borderTopWidth: 2,
            borderTopColor: selectedTab == 1 ? THEME_COLOR : "#fff",
            justifyContent: 'center',
            alignItems: 'center',
            height: '110%',
            width: '60%'
          }}>
            <Image
              source={require('../images/serving-dish.png')}
              style={[Styles.tabIcon, { tintColor: selectedTab == 1 ? THEME_COLOR : "#8e8e8e" },]}
            />
            <Text style={{ color: "#000", marginBottom: 5, tintColor: selectedTab == 0 ? THEME_COLOR : '#8e8e8e' }}>dining</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.tab} on onPress={() => {
          setselectedTab(2)
        }}>
          <View style={{
            borderTopWidth: 2,
            borderTopColor: selectedTab == 2 ? THEME_COLOR : "#fff",
            justifyContent: 'center',
            alignItems: 'center',
            height: '110%',
            width: '60%'
          }}>
            <Image
              source={require('../images/food.png')}
              style={[Styles.tabIcon, { tintColor: selectedTab == 2 ? THEME_COLOR : "#8e8e8e" },]}
            />
            <Text style={{ color: "#000", marginBottom: 5, tintColor: selectedTab == 0 ? THEME_COLOR : '#8e8e8e' }}>Zomaland</Text>
          </View>
        </TouchableOpacity>




      </View>
    </View>
  )
};

export default MainScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BottomNavigationView: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: "#fff",
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tab: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),

  },

});
