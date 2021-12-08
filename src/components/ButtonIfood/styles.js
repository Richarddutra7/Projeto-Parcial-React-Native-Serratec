import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#e00',
        paddingVertical: 14,
        height: 48,
        borderRadius: 6
    },
    buttonInvertido: {
        backgroundColor: '#fff',
        paddingVertical: 14,
        height: 48,
        borderRadius: 6
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center'
    },
    buttonTextInvertido: {
        color: '#e00',
        fontWeight: '600',
        textAlign: 'center'
    }
});

export default styles;