import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
  SwitchRow,
  SliderRow
} from 'react-native-settings-page';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'



const homeImage = { uri: "https://media.discordapp.net/attachments/956541509300269063/959755929732120596/Botao_app_v1_azul.png?width=660&height=660" };

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={homeImage} style={styles.image}></ImageBackground>
      <StatusBar style="auto" />
      <View style={styles.login}>
        <TextInput style={{height: 35}}
        margin={7}
        borderWidth={1}
        textAlign="center"
        placeholder="Usuário"
        onChangeText={(email) => setUsuario(email)}
        />
        <TextInput style={{height: 35}}
        margin={7}
        borderWidth={1}
        textAlign="center"
        secureTextEntry={true}
        placeholder="Senha"
        onChangeText={(senha) => setSenha(senha)}
        />
        <Button
        // onPress={Foobar}
        title="Entrar"
        />
      </View>
  </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
    const [email, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Carteira') {
              iconName = focused ? 'wallet-outline' : 'wallet-outline';
            } else if (route.name === 'Configurações') {
              iconName = focused ? 'settings-outline' : 'settings-outline'
            } else if (route.name === 'Assessores') {
              iconName = focused ? 'people-circle-outline' : 'people-circle-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Assessores" component={SScreen} />
        <Tab.Screen name="Carteira" component={SScreen} />
        <Tab.Screen name="Configurações" component={SScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function SScreen() {
  return(
    <ReactNativeSettingsPage>
    <SectionRow>
      <NavigateRow
        text='Ver seu perfil completo'
        iconName='faCoffee' />
      <SwitchRow 
        text='Modo Escuro' 
        iconName='faRegular faMoon' />
      <SwitchRow 
        text='Entrada com Biometria'
        iconName='fa-regular fa-fingerprint' />
      <SliderRow 
        text='Tamanho da Fonte'
        iconName='fa-regular fa-font-case'
        _color='#000'
        _min={0}
        _max={100} />
    </SectionRow>
  </ReactNativeSettingsPage>
  );
}

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
  login: {
    backgroundColor: "white",
    padding: 15,
  },
  settings: {
    backgroundColor: "white"
  }
});