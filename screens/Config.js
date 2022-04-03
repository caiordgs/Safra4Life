import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import ReactNativeSettingsPage, { 
    SectionRow, 
    NavigateRow,
    SwitchRow,
    SliderRow
} from 'react-native-settings-page';

export default function Config() {
    return(
      <ReactNativeSettingsPage style={styles.container}>
      <SectionRow>
        <NavigateRow
          text='Ver seu perfil completo'
          onPress={() => true}
        //   iconName="fa-regular fa-user"
           />
        <SwitchRow 
            text='Modo Escuro' 
        //   iconName='fa-regular fa-moon'
           />
        <SwitchRow 
          text='Entrada com Biometria'
        //   iconName='fa-regular fa-fingerprint'
           />
        <Text style={styles.accessibility}>Acessibilidade</Text>
        <SliderRow 
          text='Tamanho da Fonte'
        //   iconName='fa-regular fa-font-case'
          _color='#000'
          _min={0}
          _max={100} />
        <SwitchRow 
          text='Texto para fala (Text-to-speech)'
        //   iconName='fa-solid fa-ear-deaf'
           />
      </SectionRow>
    </ReactNativeSettingsPage>
    );
}

const styles = StyleSheet.create({
    container:{

    },
    accessibility: {
        fontSize: 25,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000"
    }
});