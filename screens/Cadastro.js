import React from 'react';
import { CheckBox, Text, View, ScrollView  } from 'react-native';

import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default function Cadastro() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ScrollView>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Cadastro
      </Text>
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
          placeholder=""
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <Button label="Cadastrar" onPress={() => true} />
      </ScrollView>
    </View>
  );
}