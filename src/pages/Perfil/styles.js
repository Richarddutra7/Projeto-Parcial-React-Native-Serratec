import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    containerHearder:{
        paddingHorizontal:10,
        marginTop:10
    },

    containerScrollView:{
        marginTop:10,
    },

    containerQrcode: { 
        alignItems: 'flex-end',
    },
    qrcode: {
        color: 'red' 
    },

    containerPerfil: {
        justifyContent: "flex-start",
        marginTop:5,
        flexDirection: "row",
        alignItems:'center'
    },

    imagem:{
        borderRadius: 30,
        marginRight:15,
        width: 40,
        height: 40,
    },

    containerConvite:{
        justifyContent: "center",
        marginTop:30,
        flexDirection: "row",
        alignItems:'center',
        borderColor: '#dcdcdc',
        borderWidth: 1
    },
    convidar:{
        marginVertical:10,
        marginLeft:10,
        marginRight:15,
        width: 70,
        height: 70,
        color: 'red' 
    },

    containerChat:{
        justifyContent: "flex-start",
        marginTop:20,
        flexDirection: "row",
        alignItems:'center',
        borderColor: '#dcdcdc',
        borderWidth: 1
    },

    chat:{
        marginVertical:10,
        marginLeft:15,
        marginRight:15,
        width: 70,
        height: 70,
    },

    containerNotificacao:{
        justifyContent: "flex-start",
        marginTop:5,
        flexDirection: "row",
        alignItems:'center',
        borderColor: '#dcdcdc',
        borderWidth: 1,
    },

    notificacao: {
        marginVertical:10,
        marginLeft:15,
        marginRight:15,
        width: 70,
        height: 70,
    },

    containerAjuda:{
        justifyContent: "flex-start",
        marginTop:50,
        flexDirection: "row",
        alignItems:'center',
        borderColor: '#dcdcdc',
        borderWidth: 1
    },

    ajuda:{
        marginVertical:10,
        marginLeft:15,
        marginRight:15,
        width: 70,
        height: 70,
    },

    marginFinal:{
        marginTop:170
    }
});
export default styles;