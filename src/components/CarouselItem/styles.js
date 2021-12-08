import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerCard: {
        height: 124,
        width: 126,
        alignItems: "center",

        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingVertical: 12,
        marginHorizontal: 6,
        borderRadius: 6,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    image: {
        borderRadius: 33,
        width: 60,
        height: 60,
        marginBottom: 4
    },
    nome: {
        color: '#444',
        fontSize: 15,
        textAlign: 'center'
    }
});

export default styles;