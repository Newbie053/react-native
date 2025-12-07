import { StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemeView from '../../components/ThemeView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/Themedutton'
import { TextInput } from 'react-native'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user } = useUser()
    const handleSubmit = async () => {
        console.log('current user:,user')
        console.log('login form submitted: ', email, password)
    }
    return (
        <ThemeView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to Your Account
            </ThemedText>
            <Spacer />
            <ThemedTextInput
                style={{ marginBottom: 20, width: "80%" }}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <ThemedTextInput
                style={{ marginBottom: 20, width: "80%" }}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />


            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#f2f2f2' }}>Login</Text>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/register" replace>
                <ThemedText style={{ textAlign: "center" }}>
                    Register instead
                </ThemedText>
            </Link>

        </ThemeView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8
    }
})