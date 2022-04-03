import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import { Card } from '@rneui/base';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';

export default function Carteira() {
    return(
        <ScrollView>
        <SafeAreaView>
            <View style={styles.container}>
                <CardTitle style={styles.header}>
                    <Text>
                        Bem vindo, Usuário!
                    </Text>
                </CardTitle>
                <Card>
                {/* {react-native-elements Card} */}
                <Text style={styles.paragraph}>
                    Patrimônio Total:
                    R$ 35.000,00
                </Text>
                </Card>
            </View>
        </SafeAreaView>
        <SafeAreaView style={styles.detailed}>
        <CardTitle style={styles.header}>
                    <Text>
                        Detalhado:
                    </Text>
                </CardTitle>
                <CardTitle style={styles.header}>
                    <Text>
                        Disponível em conta:
                    </Text>
                </CardTitle>
                <Card>
                {/* {react-native-elements Card} */}
                <Text style={styles.paragraph}>
                    Total:
                    R$ 2.500,00
                </Text>
                <Text style={styles.paragraph}>
                    % do Total:
                    7,14%
                </Text>
                </Card>
                <CardTitle style={styles.header}>
                    <Text>
                        Renda Fixa:
                    </Text>
                </CardTitle>
                <Card>
                {/* {react-native-elements Card} */}
                <Text style={styles.paragraph}>
                    Total Investido:
                    R$ 20.000,00
                </Text>
                <Text style={styles.paragraph}>
                    % do Total:
                    57,14%
                </Text>
                </Card>
                <CardTitle style={styles.header}>
                    <Text>
                        Renda Variável:
                    </Text>
                </CardTitle>
                <Card>
                {/* {react-native-elements Card} */}
                <Text style={styles.paragraph}>
                    Total Investido:
                    R$ 7.500,00
                </Text>
                <Text style={styles.paragraph}>
                    % do Total:
                    21,42%
                </Text>
                </Card>
                <CardTitle style={styles.header}>
                    <Text>
                        Tesouro Direto:
                    </Text>
                </CardTitle>
                <Card>
                {/* {react-native-elements Card} */}
                <Text style={styles.paragraph}>
                    Total Investido:
                    R$ 5.000,00
                </Text>
                <Text style={styles.paragraph}>
                    % do Total:
                    14,28%
                </Text>
                </Card>
        </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151f52', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailed: {
        backgroundColor: '#151f52', 
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingTop: 15,
    },
    paragraph:{
        color: '#151f52', 
        fontSize: 15,
    },
    header: {
        color: '#fff',
        paddingTop: 15,
        fontSize: 20,
    },
});