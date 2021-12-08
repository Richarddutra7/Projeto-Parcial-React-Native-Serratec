import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerItemMenuPrincipal: {
    justifyContent: 'space-between',
    marginBottom: 1,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ddd5',
    borderBottomWidth: 1,
  },
  containerInfoItemMenuPrincipal: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tituloCard: {
      fontSize: 19,
      fontWeight: '500',
      color: '#333c'
  },
  descricaoCard: {
      fontSize: 14,
      fontWeight: '500',
      color: '#aaa'
  },
  iconeSetaEscuro: {
    color: '#aaaa',
  },
  menuImagem: {
    height: 24,
    width: 24,
    marginLeft: 4,
    marginRight: 18,
    opacity: .8
  }
});

export default styles;