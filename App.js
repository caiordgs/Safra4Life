import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const image = { uri: "https://play-lh.googleusercontent.com/Z27aBw39vr3bOhdFn6kvlNzkSZmajgeG2jziYHWTKtxND6Jyclv4QHeDxL76tm4pR2_o" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="contain" style={styles.image}>
    </ImageBackground>
    <StatusBar style="auto" />
    <TouchableHighlight activeOpacity={0.85} underlayColor="#DDDDDD" onPress={this.portfolio}>
      <View>
        <Icon style={styles.home} name="home" />
        <Text style={styles.text}>Home</Text>
      </View>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    color: "#120c40"
  },
  home: {
    color: "#120c40",
    textAlign: "center",
    fontSize: 50
  },
});

export default App;