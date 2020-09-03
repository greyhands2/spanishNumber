import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
// import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

const listBackgroundColors = {
  1: "#EA7773",
  2: "#2B2B52",
  3: "#1287A5",
  4: "#333945",
  5: "#0A3D62",
  6: "#00838f",
  7: "#ff4081",
  8: "#6a1b9a",
  9: "#0288d1",
  10: "#8d6e63"

};

const soundList = {
one: require('./assets/one.wav'),
two: require('./assets/two.wav'),
three: require('./assets/three.wav'),
four: require('./assets/four.wav'),
five: require('./assets/five.wav'),
six: require('./assets/six.wav'),
seven: require('./assets/seven.wav'),
eight: require('./assets/eight.wav'),
nine: require('./assets/nine.wav'),
ten: require('./assets/ten.wav')
};

export default class App extends React.Component {
  playSound = async (number) => {
    const soundObject = new Audio.Sound();
try {
  let path = soundList[number];
  await soundObject.loadAsync(path);
  await soundObject.playAsync().then( async playbackStatus => {
    //unload audio from memory buffer using a set time out with   duration of the audio itself
     setTimeout(()=> {
      soundObject.unloadAsync();
    },  playbackStatus.playableDurationMillis);
  }).catch(error => {
    console.log(error);
  });
  // Your sound is playing!
} catch (error) {
  // An error occurred!
}




  }
  
  
  
  
  constructor(props){

    super(props);

    this.state = {


    };
  }
  
  //play sound

  render(){
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png') }/>
      <ScrollView style={styles.gridContainer}>
        

    <View style={styles.rowContainer}>
      <TouchableOpacity  style={[styles.item, {backgroundColor: listBackgroundColors[1]}] } onPress={() => {
        this.playSound("one")
      }}>
        <Text style={styles.itemText}> One</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.item, {backgroundColor: listBackgroundColors[2]}] } onPress={() => {
        this.playSound("two")
      }}>
        <Text style={styles.itemText}>Two </Text>
      </TouchableOpacity>
    </View>

    <View style={styles.rowContainer}>
      <TouchableOpacity  style={[styles.item, {backgroundColor: listBackgroundColors[3]}] } onPress={() => {
        this.playSound("three")
      }}>
        <Text style={styles.itemText}> Three</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.item, {backgroundColor: listBackgroundColors[4]}] } onPress={() => {
        this.playSound("four")
      }}>
        <Text style={styles.itemText}>Four </Text>
      </TouchableOpacity>
    </View>


    <View style={styles.rowContainer}>
      <TouchableOpacity  style={[styles.item, {backgroundColor: listBackgroundColors[5]}] } onPress={() => {
        this.playSound("five")
      }}>
        <Text style={styles.itemText}> Five</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.item, {backgroundColor: listBackgroundColors[6]}] } onPress={() => {
        this.playSound("six")
      }}>
        <Text style={styles.itemText}>Six </Text>
      </TouchableOpacity>
    </View>



    <View style={styles.rowContainer}>
      <TouchableOpacity  style={[styles.item, {backgroundColor: listBackgroundColors[7]}] } onPress={() => {
        this.playSound("seven")
      }}>
        <Text style={styles.itemText}> Seven</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.item, {backgroundColor: listBackgroundColors[8]}] } onPress={() => {
        this.playSound("eight")
      }}>
        <Text style={styles.itemText}>Eight </Text>
      </TouchableOpacity>
    </View>



    <View style={styles.rowContainer}>
      <TouchableOpacity  style={[styles.item, {backgroundColor: listBackgroundColors[9]}] } onPress={() => {
        this.playSound("nine")
      }}>
        <Text style={styles.itemText}> Nine</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.item, {backgroundColor: listBackgroundColors[10]}] } onPress={() => {
        this.playSound("ten")
      }}>
        <Text style={styles.itemText}>Ten </Text>
      </TouchableOpacity>
    </View>
      </ScrollView>
    </View>
  );
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 40
    
  },
  gridContainer: {
    flex: 1,
    margin: 5
  },
  logo: {
    alignSelf: "center",
    marginTop: 15
  },
  rowContainer: {
    flexDirection: "row"
  },
  item:{
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  itemText: {
    color: "#ffffff",
    fontSize: 20,


  }
});
