import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default () => {
    return (
      <View style={styles.container}>
       <Image style={styles.logo} source={require('./assets/Botao_app_v1_azul.png')} imageStyle={{opacity:1}}/>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex:1,
    backgroundColor: "#fff"
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: "center",
    marginTop: 150,
  }
});