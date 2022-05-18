import { StyleSheet, View,Image } from 'react-native'
import React from 'react';

export default function Display({pic}) {
  return (
    <View style={styles.photo}>
    <Image style={{height:400,width:300}} source={pic}/>
    </View>
  )
}

const styles = StyleSheet.create({
photo:{
height:400,
width:300,
backgroundColor:'black',
},
})