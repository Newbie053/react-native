import { StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemeView from '../../components/ThemeView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/Themedutton'

const Register = () => {
    const handleSubmit = () => {
        console.log("Register Button Pressed")
    }
    return (
        <ThemeView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register an Account
            </ThemedText>
            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#f2f2f2' }}>Register</Text>
            </ThemedButton>
            <Spacer height={100} />
            <Link href="/login" replace>
                <ThemedText style={{ textAlign: "center" }}>
                    Login instead
                </ThemedText>
            </Link>

        </ThemeView>
    )
}

export default Register

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
})