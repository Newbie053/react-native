import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
//import { Container } from 'lucide-react'
import Logo from '../assets/img/logo.png'

const Home = () => {
    return (
        <View style={styles.Container}>
            <Image style={styles.img} source={Logo} />

            <Text style={styles.title}>The Number 1</Text>
            <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
            <View>
                <Text style={styles.card}>Hello,this is a card.</Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18

    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        boxShadow: "4px 4px rgba(0,0,0,0.1)"
    },
    img: {
        marginVertical: 20
    },
})