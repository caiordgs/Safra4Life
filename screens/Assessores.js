import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, name: "Clara Martins",   position:"#Renda-Fixa #Renda-Variável", image:"https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg"},
        {id:1, name: "Jair Santos",   position:"#Renda-Fixa #Tesouro-Direto", image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"},
        {id:2, name: "Cláudio Silva",  position:"#CDB #LCI #LCA", image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"} ,
        {id:3, name: "Renata Pereira", position:"#Debentures #FI #FII",     image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"} ,
        {id:4, name: "Patrícia Ribeiro", position:"#Ações",   image:"https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg"} ,
        {id:5, name: "Luiz Felipe Garcia",   position:"#Renda-Variável #Ações", image:"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"} ,
        {id:6, name: "Karina Reis",   position:"#FI #FII",           image:"https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg"} ,
        {id:8, name: "Gilberto Rodrigues",   position:"#LCI #LCA",           image:"https://images.pexels.com/photos/7595194/pexels-photo-7595194.jpeg"} ,
        {id:9, name: "Paulo Lima",   position:"#LCI #Ações",           image:"https://images.pexels.com/photos/8330434/pexels-photo-8330434.jpeg"} ,
        {id:9, name: "Bruna Pires",   position:"#Debentures",           image:"https://images.pexels.com/photos/11022093/pexels-photo-11022093.jpeg"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.name)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardHeader}>
                  <Image style={styles.icon} source={{uri:"https://img.icons8.com/flat_round/64/000000/hearts.png"}}/>
                </View>
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                    <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Follow</Text>  
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  icon:{
    height: 20,
    width: 20, 
  }
});    
                                            