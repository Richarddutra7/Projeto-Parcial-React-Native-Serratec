import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerCard: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: '10%',
    borderRadius: 4,

    shadowColor: '#0005',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 0.5,
    elevation: 3,
  },
  containerInfoRestaurante: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerImagemENome: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem: {
    height: 42,
    width: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  nomeRestaurante: {
    color: '#444',
    fontSize: 15,
    fontWeight: '600',
  },
  icone: {
    color: '#888',
  },
  linhaHorizontal: {
    marginVertical: 9,
    borderBottomColor: '#eeea',
    borderBottomWidth: 2,
  },
  linha: {
    flexDirection: 'row',
  },
  statusPedido: {
    marginTop: 2,
    alignItems: 'center',
    marginBottom: 10,
  },
  iconeCheck: {
    color: '#5a5',
    paddingHorizontal: 8,
    marginRight: 8,
  },
  conteudo: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
  },
  itemEsquerda: {
    marginRight: 8,
    backgroundColor: '#eeee',
    fontWeight: '600',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  itemDireita: {
    color: '#bbb',
  },
  containerAvaliacao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avaliacaoTexto: {
    color: '#444'
  },
  linhaBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
