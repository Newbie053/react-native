import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemeView from "../../components/ThemeView"

const Create = () => {
    return (
        <ThemeView style={styles.container}>

            <ThemedText title={true} style={styles.heading}>
                Add a New Book
            </ThemedText>
            <Spacer />

        </ThemeView>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
})