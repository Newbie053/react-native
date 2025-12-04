import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

import { Colors } from "../constants/Colors"
import { useColorScheme } from "react-native"
import ThemeView from '../components/ThemeView'
import ThemedText from '../components/ThemedText'

const About = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <ThemeView style={[styles.container, { backgroundColor: theme.background }]}>
            <ThemedText style={[styles.title, { color: theme.title }]}>About Page</ThemedText>

            <Link href="/" style={[styles.link, { color: theme.text }]}><ThemedText>Home Page</ThemedText> </Link>
        </ThemeView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0dfe8',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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