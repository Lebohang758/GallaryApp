import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { useState } from 'react'
import Display from './Display';

export default function App() {
  const [pic, setPic] = useState();

  function firstImage(){
    setPic(require("./assets/pic1.jpg"));
  }
  function secondImage() {
    setPic(require("./assets/pic2.jpg"));
  }
  function thirdImage() {
    setPic(require('./assets/taylor.jpg'));
  }
  return (
    <View style={styles.container}>
    <Text style={{color:'#fff',fontSize:30,fontWeight:'bold',fontStyle:'italic'}}>GallaryAPP</Text>
      <Display pic={pic} />
      <TouchableOpacity onPress={firstImage}>
      <Image style={{ height: 50, width: 50 ,borderRadius:10,marginTop:10,marginRight:'70%'}} source={require("./assets/pic1.jpg")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={secondImage}>
      <Image style={{ height: 50, width: 50, borderRadius: 10 ,marginTop:10}} source={require("./assets/pic2.jpg")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={thirdImage}>
      <Image style={{ height: 50, width: 50, borderRadius: 10,marginTop:10,marginLeft:'68%'}} source={require("./assets/taylor.jpg")} />
      </TouchableOpacity>
      <StatusBar hidden/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
