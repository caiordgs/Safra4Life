import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { useFormik } from 'formik';

import TextInput from '../components/TextInput';
import Button from '../components/Button';

const homeImage = { uri: "https://media.discordapp.net/attachments/956541509300269063/959755929732120596/Botao_app_v1_azul.png?width=660&height=660" };

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFF"
      }}
    >
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Login
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%', color: "#223e4b" }}>
        <TextInput
          icon="mail"
          placeholder="Digite seu login"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon="key"
          placeholder="Digite sua senha"
          secureTextEntry
          autoCompleteType="password"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
      <Button label="Entrar" onPress={() => true} />
    </View>
  );
}