import React, { useState } from 'react';
import { Text, View, ScrollView, Picker } from 'react-native';
import CheckBox from 'expo-checkbox';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Hero from '../Hero';

export default function Cadastro() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
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
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Nome"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Sobrenome"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Data de Nascimento"
          autoCapitalize="none"
          keyboardAppearance="dark"
          keyboardType="number-pad"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Endereço"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Cidade"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Estado"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="País"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Telefone"
          toCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <View style={{ paddingHorizontal: 0, marginBottom: 16, width: '100%' }}>
        <TextInput
          placeholder="Você é PCD? Se sim, especifique."
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
          <Picker.Item label="Escolher" />
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
      <Button label="Cadastrar" onPress={() => true} />
      </ScrollView>
    </View>
    <Hero />
    </>
  );
}