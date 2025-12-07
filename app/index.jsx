import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/img/logo_light.png'
import { Colors } from '../constants/Colors'
import ThemeView from '../components/ThemeView'
import Spacer from '../components/Spacer'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'

const Home = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <ThemeView style={[styles.container, { backgroundColor: theme.background }]}>
            <ThemedLogo />
            <Spacer height={20} />

            <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

            <Spacer height={20} />
            <ThemedText>  Reading List App</ThemedText>
            <Spacer />

            <Link href="/login" style={styles.link}><ThemedText>Login Page</ThemedText></Link>
            <Link href="/register" style={styles.link}><ThemedText>Register Page</ThemedText></Link>
            <Link href="/books" style={styles.link}><ThemedText>books Page</ThemedText></Link>
        </ThemeView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0dfe8'
    },
    img: {
        marginVertical: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})