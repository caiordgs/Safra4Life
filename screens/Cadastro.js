import React, { useState } from 'react';
import { Text, View, ScrollView, Picker, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import api from '../Src/Api';

export default function Cadastro() {
  
  const [userEmail,setUserEmail] = useState();
  const [userName,setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  function handleEmailChange(userEmail){ setUserEmail(userEmail); }
  function handleNameChange(userName){ setUserName(userName); }
  function handlePasswordChange(userPassword){ setUserPassword(userPassword); }
  function handlePasswordConfirmation(userPasswordConfirmation){ setUserPasswordConfirmation(userPasswordConfirmation); }
  function handleButtonPress(){
    console.log({userEmail, userName, userPassword, userPasswordConfirmation});
    this.userMap.user=this.userName;
    console.log(this.userMap.user);
      console.log("Entrou no método");
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "user": {
              "email": "santanacaiio@gmail.com",
              "password": "12345678",
              "password_confirmation": "12345678"
          }
      })
    };
    const response = fetch('http://localhost:3000/users', requestOptions)
    const data = response.json();
    this.setState({ postId: data.id });
    console.log(data);
  };
  

  let userMap = {
    "user": {
        "email": "",
        "password": "",
        "password_confirmation": ""
    }
  }
  

  return (
    <>
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ScrollView>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          value={userEmail}
          onChangeText={handleEmailChange}
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          value={userPassword}
          onChangeText={handlePasswordChange}
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
        </View>
        <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          value={userPasswordConfirmation}
          onChangeText={handlePasswordConfirmation}
          placeholder="Confirmação de Senha"
          secureTextEntry
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          value={userName}
          onChangeText={handleNameChange}
          placeholder="Nome"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Sobrenome"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Data de Nascimento"
          autoCapitalize="none"
          keyboardAppearance="dark"
          keyboardType="number-pad"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Endereço"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Cidade"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Estado"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="País"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Telefone"
          toCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="PCD? Se sim, especifique."
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <Picker>
          <Picker.Item label="Masculino" />
          <Picker.Item label="Feminino" />
          <Picker.Item label="Prefiro não responder" />
          <Picker.Item label="Gênero:" />
        </Picker>
      </View>
      <View>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={{ paddingBottom: 10, color: '#151f52' }}>Você autoriza o seu cadastro no Open Banking Safra?</Text>
      </View>
      <Button label="Cadastrar" onPress={handleButtonPress} />
      </ScrollView>
    </View>
    </>
  );
}

