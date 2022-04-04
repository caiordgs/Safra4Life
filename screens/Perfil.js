import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class ProfileView extends Component {

  render() {
    return (
    <>
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg'}}/>
                <Text style={styles.name}>
                  Clara Martins
                </Text>
            </View>
          </View>

          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Especialidades</Text>
              <Text style={styles.count}>#Renda-Fixa #Renda-Variável</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Diferenciais</Text>
              <Text style={styles.count}>- LIBRAS</Text>
            </View>
            <View style={styles.detailContent}>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Entre em Contato</Text>  
              </TouchableOpacity> 
              <Text style={styles.description}> - Oferecer aconselhamento estratégico em uma variedade de produtos e serviços financeiros (gestão de dívidas, gestão de caixa, cobertura de seguros, investimentos)</Text>
              <Text style={styles.description}> - Avaliar a situação financeira geral do cliente, entender suas necessidades e desenvolver um plano financeiro sólido</Text>
              <Text style={styles.description}> - Orientar os clientes para uma decisão financeira lucrativa e segura</Text>
            </View>
        </View>
      </View>
    </>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#151f52",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#151f52"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#151f52",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#FFFFFF",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});

                                            