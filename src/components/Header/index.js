import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style.js';

//importa os icones

const Header = ({pedidosAtivo, perfilAtivo, handleSetPedidosAtivo, handleSetPerfilAtivo}) => {
  return (
    <View style={styles.containerMenu}>
      <TouchableOpacity style={styles.containerMenuItem}>
        <Image
          source={require('../../assets/img/inicio.png')}
          style={styles.inicio}
        />
        <Text style={styles.menuItemTexto}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containerMenuItem}>
        <Image
          source={require('../../assets/img/busca.png')}
          style={styles.inicio}
        />
        <Text style={styles.menuItemTexto}>Busca</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containerMenuItem} onPress={handleSetPedidosAtivo}>
        <Image
          source={pedidosAtivo ? require('../../assets/img/header3Ativo.png') : require('../../assets/img/pedidos.png')}
          style={styles.inicio}
        />

        <Text style={styles.menuItemTexto}>Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containerMenuItem} onPress={handleSetPerfilAtivo}>
        <Image
          source={perfilAtivo ? require('../../assets/img/header4Ativo.png') : require('../../assets/img/perfil.png')}
          style={styles.inicio}
        />

        <Text style={styles.menuItemTexto}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
