import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Link } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar';
import ThemeView from "../components/ThemeView"

const RootLayout = () => {
    const colorScheme = useColorScheme()
    //console.log(colorScheme)
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <>
            <StatusBar value="auto" />

        <Stack screenOptions={{

                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
            }}>
                {/* Groups */}
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ title: "Home" }} />
                {/* <Stack.Screen name="about" options={{ title: "About" }} />
                <Stack.Screen name="contact" options={{ title: "Contact" }} /> */}
            </Stack>
        </>

    )
}

// export default RootLayout

// const styles = StyleSheet.create({})