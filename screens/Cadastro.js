import React, { useState } from 'react';
import { Text, View, ScrollView, Picker } from 'react-native';
import CheckBox from 'expo-checkbox';

import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default function Cadastro() {
  // let state = { userEmail: '' }
  
  const [userEmail,setUserEmail] = useState();
  const [userName,setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  // function handleEmailChange(userEmail){ setUserEmail(userEmail); }
  

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
          onValueChange={(userEmail) => setUserEmail(userEmail)}
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
          onValueChange={(userPassword) => setUserPassword(userPassword)}
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
          onValueChange={(userPasswordConfirmation) => setUserPasswordConfirmation(userPasswordConfirmation)}
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
          onValueChange={(userName) => setUserName(userName)}
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
      <Button label="Cadastrar" onPress={() => {console.log(this.userEmail);console.log(userPassword);console.log(userPasswordConfirmation);console.log(userName)}} />
      </ScrollView>
    </View>
    </>
  );
}