import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerMenu:{
        backgroundColor: '#fff',
        position: "absolute",
        width: '100%',
        bottom: 0,
        justifyContent:'space-around',
        flexDirection: "row",
        padding: 7,
        borderTopColor: '#aaa3',
        borderTopWidth: 1
    },
    containerMenuItem: {
        justifyContent:'center',
        alignItems: 'center',
    },
    inicio:{
        borderRadius: 13,
        width: 22,
        height: 22,
    },
    menuItemTexto: {
        color: '#aaa',
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center'
    },    
});
export default styles;

