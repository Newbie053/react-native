import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemeView from '../../components/ThemeView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Register = () => {
    return (
        <ThemeView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register an Account
            </ThemedText>

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
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
})