import { View, Text,StyleSheet,Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {
  responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
import { THEME_COLOR } from '../string';


const Tabs1 = () => {
  return (
<ScrollView style={{flex:1}}>
<View style ={styles.container}>
    <View style={styles.header}>
     <View style={styles.headerLeft}>
     <Image
              source={require('../images/location.png')}
              style={styles.location}
               />
      <View>
     <View style={{flexDirection:'row',marginLeft: 10}}>
     <Text style={styles.locationbold}>Noida,Delhi</Text>
     </View>
     <Text style={styles.locationSmall}>Railway Colony</Text>
     </View>
     </View>
     <View style={styles.headerRight}>
        <Image 
             source={require('../images/language.png')}
              style={[styles.location,{tintColor:'#000',marginRight:20}]}
        />
     </View>
    </View>
    <View style={styles.searchBar}>
    <Image
              source={require('../images/loupe.png')}
              style={{  tintColor:THEME_COLOR,
                     height:responsiveHeight(3),
                     width:responsiveWidth(6),
                     marginLeft:5}}
               />
               <Text style={{width:'80%',marginLeft:20}}>Search Item</Text>
                <Image
              source={require('../images/microphone.png')}
              style={styles.location}
               />
    </View>
 
    <View style={{marginTop:20}}>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
         data={["sort","Fast Delivery","Rating 4.0","Pure Veg","Fresh Food","more","Nonvage"]}
           renderItem={({item,index}) =>{
            return(
              <TouchableOpacity style={styles.brandItem} >
              <View style={styles.FilterItemView} > 
              <Text>{item}</Text>
              </View>
              </TouchableOpacity>
            )
           }}/>
    </View>

    <View style={styles.upperView}>
      <TouchableOpacity style={styles.card}>
      <Image
              source={require('../images/offer.jpg')}
              style={styles.stretch}
              />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Image
              source={require('../images/offers.jpg')}
              style={styles.stretch}
              />
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.banner}>
      <Image
              source={require('../images/istockphoto.jpg')}
              style={{ width: "100%",
                       height: "100%",
                       borderRadius:10,
                       marginTop:20,
                       }}/>
      </TouchableOpacity>

    <View>
    <Text style={{
             fontWeight:'800',
             color:'#000',
             marginTop:30,
             marginLeft:20,
             fontSize:responsiveFontSize(3),
            
      }}>Top Brands For You</Text>
    </View>
    <View style={{ marginTop:10,marginLeft:20}}>
      <FlatList
         data={[
              require('../images/KFC.jpeg'),
              require('../images/subway.png'),
              require('../images/Dominos.png'),
              require('../images/starbucks.jpeg'),
              ]}
              horizontal
           renderItem={({item,index}) =>{
            return(
              <View style={styles.TrandItem}>
              <View style={styles.brandImageView}>
                <Image source={item} style={styles.brandImage} />
              </View> 
            <View style={styles.percentageView}>
              <Text style={{color:'#fff',fontSize:10,}}>40%  off</Text>
               </View>
                 
              </View>
            )
           }}/>
    </View>
    <Text style={{
             fontWeight:'800',
             color:'#000',
             marginTop:20,
             marginLeft:20,
             fontSize:responsiveFontSize(3),
            
      }}>Recommended For You</Text>
      <View style={{marginTop:15,}}>
         <FlatList 
           horizontal
           showsHorizontalScrollIndicator={false}
             data={[1,1,1,1,]} renderItem= {({item,index})=>{
                return(
                  <TouchableOpacity style={styles.recommendedItem}> 
                      <Image  source={require('../images/Pizza.jpeg')}
                               style={{height:'70%',width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20}}
                      />
                      <View style={styles.recommendedItemPriceView}>
                        <Text>Roms Pizza</Text>
                        <View style={{
                          width:50,
                          height:25,
                          backgroundColor:'green',
                          borderRadius:10,
                        }}>

                        </View>
                      </View>
                     
                  </TouchableOpacity>
                )
             }}
         />
      </View>
    </View>
</ScrollView>
  );
};

export default Tabs1;
 const styles=StyleSheet.create({
    container:{
       flex:1,
      backgroundColor:'#f2f2f2'
    },
    header:{
       height: responsiveHeight(8),
       width: responsiveWidth(100),
        backgroundColor:"#f2f2f2",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        marginTop:20 
    },
    headerLeft:{
        flexDirection:'row',
        alignItems:'center'
    },
    headerRight:{
        flexDirection:'row',
    },
    location:{
        tintColor:THEME_COLOR,
        height:responsiveHeight(4),
        width:responsiveWidth(6),
        marginLeft:5
    },
    locationbold:{
       fontWeight:'800'
    },
    locationSmall:{
        marginLeft:10,
    },
    searchBar:{
     height:responsiveHeight(6),
     borderWidth:2,
     borderColor:'#8e8e8e',
     alignSelf:'center',
     width:responsiveWidth(90),
     marginTop:20,
     borderRadius:8,
     backgroundColor:'#f2f2f2',
     flexDirection:'row',
     alignItems:'center',
     paddingLeft:10,
     paddingRight:10,
     justifyContent:'space-evenly'
    },
    filterItem:{
        borderWidth:"0.2",
        borderRadius:5,
        
    },
    upperView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    card:{
      width:responsiveWidth(38),
      height:responsiveHeight(14),
    },
    stretch:{
      width: "100%",
      height: "100%",
      borderRadius:10,
      marginTop:20,
    },
    banner:{
      width:"90%",
      alignSelf:'center',
      marginTop:30,
      height:responsiveHeight(20),
    },
    brandItem:{
      marginLeft:10,
      borderWidth:0.5,
      borderRadius:5,
      marginLeft:15,
      height:30
    },
    FilterItemView:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       height:'100%',
       paddingLeft:5,
       paddingRight:5

    },
    TrandItem:{
       marginLeft:10
    },
    brandImage:{
         height:'60%',
         wirdth:'40%',
          resizeMode:'contain'
    },
   brandImageView:{
    backgroundColor:'#fff',
    width:responsiveWidth(14),
    height:responsiveHeight(9),
    borderRadius:responsiveWidth(14)/2,
    marginLeft:10,
    justifyContent:'center',
    alignItems:'center',
   },
   percentageView:{
       wirdth:'80%',
       height:20,
       backgroundColor:'#497ceb',
        borderRadius:3,
        position:'absolute',
        top:45,
       alignSelf:'center'

   },
   recommendedItem:{
        width:responsiveWidth(40),
        height:responsiveHeight(30),
        backgroundColor:'#fff',
        borderRadius:10,
        marginLeft:15,
       marginBottom:100,
   },
   recommendedItemPriceView:{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          marginTop:10,
          marginRight:10,
   },
 })