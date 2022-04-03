import React from 'react';
import { ImageBackground, StyleSheet, Text, View} from 'react-native';
import { Card } from 'react'

export default function Carteira() {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Olá, Usuário!</Text>
            <Text style={styles.header}>Patrimônio Total:</Text>
            <Text style={styles.header}>R$ 35.000,00</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#151f52", 
        alignItems: 'center',
        justifyContent: 'center'
    },
    header :{
        color: "#fff", 
        fontSize: 35,
    }
});