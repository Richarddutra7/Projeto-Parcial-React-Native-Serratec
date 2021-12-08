import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerPerfil: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  containerHeader: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
  containerQrcode: {
    marginTop: 10,
  },
  qrcode: {
    color: 'red',
  },

  containerApps: {
    height: '84%'
  },

  containerInfoUsuario: {
    justifyContent: 'flex-start',
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagemPerfil: {
    borderRadius: 24,
    marginRight: 15,
    width: 48,
    height: 48,
  },
  nomePerfil: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },

  containerConvite: {
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    padding: 14,

    shadowColor: '#6663',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  containerInfoConvite: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  conviteImagem: {
    marginRight: 16,
    width: 32,
    height: 32,
  },
  conviteCupom: {
    color: '#333',
    fontWeight: '600',
    fontSize: 15,
  },
  conviteAmigos: {
    color: '#aaa',
    fontWeight: '500',
    fontSize: 15,
  },
  iconeSeta: {
    color: '#aaa5',
  },

  separadorMenus: {
    marginTop: 48,
  },

  marginFinal: {
    marginTop: 0,
  }
});
export default styles;
