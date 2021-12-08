import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerMenuInferior: {
        justifyContent: 'space-between',
        marginBottom: 1,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ddd5',
        borderBottomWidth: 1,
      },
    
      containerInfoMenuInferior: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
      },
    
      menuInferiorImagem:{
        width: 20,
        height: 20,
        marginLeft: 4,
        marginRight: 16,
        opacity: .8
      },
    
      menuInferiorTitulo: {
        fontSize: 16,
        fontWeight: '600',
        color: '#999'
      },
      iconeSetaEscuro: {
        color: '#aaaa',
      },
});

export default styles;