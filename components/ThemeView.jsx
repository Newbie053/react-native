import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import React, { Children } from 'react'

const ThemeView = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <View style={[{ backgroundColor: theme.background }, style]}
            {...props}
        />



    )
}

export default ThemeView

const styles = StyleSheet.create({})