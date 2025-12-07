import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemeView from "../../components/ThemeView"

const Books = () => {
    return (
        <ThemeView style={styles.container} safe={true}>

            <Spacer />
            <ThemedText title={true} style={styles.heading}>
                My Reading List
            </ThemedText>

        </ThemeView>
    )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        alignItems: "stretch",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
})