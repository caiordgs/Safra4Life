
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

export default class ProfileDetail extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.card, styles.profileCard]}> 
            <Image style={styles.avatar} source={{uri: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg"}} />
            <Text  style={styles.name}>Luana Lima</Text>
          </View> 

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Detalhes:</Text>   
            <Text style={styles.cardDescription}> - Perfil: Agressivo</Text>   
            <Text style={styles.cardDescription}> - #Renda-Variável #Fundo-Imobiliário</Text>      
          </View>

          <View style={styles.card}>
            <Text style={styles.cardDescription}>Patrimônio Distribuido:</Text>   
            <Text style={styles.cardDescription}> - Renda Variável: R$ 20.000,00</Text>   
            <Text style={styles.cardDescription}> - Fundo Imobiliário: R$ 15.000,00</Text>   
            <Text style={styles.cardDescription}> - Ações: R$ 7.500,00</Text>   
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor : "#DCDCDC"
  },
  cardTittle:{
    color:"white",
    fontSize:22,
    marginBottom:5,
  },
  cardDescription:{
    color:"white",
    fontSize:22,
    marginBottom:5,
  },
  avatar:{
    width:150,
    height:150,
    borderRadius: 50
  },
  card:{
    backgroundColor: "#151f52",
    borderRadius:10,
    padding:10,
    height:100,
    marginTop:10,
  },
  profileCard:{
    height:200,
    alignItems: 'center',
    marginTop:20,
  },
  name:{
    marginTop:10,
    fontSize:22,
    color:"white",
  },
  photosContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
  },
  photosCard:{
    marginTop:10,
  },
  photo:{
    width:113,
    height:113,
    marginTop:5,
    marginRight:5,
  },
});