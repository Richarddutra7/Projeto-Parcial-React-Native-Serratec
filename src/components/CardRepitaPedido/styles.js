import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {        
        marginVertical: '10%',
        padding: 14,
        borderRadius: 6,
        
        backgroundColor: '#fff',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 14
    },
    containerTexto: {
        flex: 7
    },
    titulo: {
        color: '#444',
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10
    },
    linha: {
        flexDirection: 'row',
    },
    conteudo: {
        color: '#000',
        fontSize: 14,
    },
    itemEsquerda: {
        marginRight: 8,
        backgroundColor: '#eeee',
        fontWeight: '600',
        paddingHorizontal: 4,
        borderRadius: 4
    },
    itemDireita: {
        color: '#bbb',
    },
    containerImg: {
        flex: 1
    },
    imgUltimoPedido: {
        height: 42,
        width: 42,
        borderRadius: 21
    }
});

export default styles;