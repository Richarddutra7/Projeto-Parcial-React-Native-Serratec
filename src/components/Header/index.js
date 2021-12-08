import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';

//importa os icones

const Header = () => {
  return (
    <View style={styles.containerMenu}>
      <View>
        <Image
          source={require('../../assets/img/inicio.png')}
          style={styles.inicio}
        />
        <View>
          <Text>Início</Text>
        </View>
      </View>

       <View>
       <Image
          source={require('../../assets/img/busca.png')}
          style={styles.inicio}
        />
        <View>
          <Text>Busca</Text>
        </View>
      </View>

      <View>
      <Image
          source={require('../../assets/img/pedidos.png')}
          style={styles.inicio}
        />
        <View>
          <Text>Pedido</Text>
        </View>
      </View> 

      <View>
      <Image
          source={require('../../assets/img/perfil.png')}
          style={styles.inicio}
        />
        <View>
          <Text>Perfil</Text>
        </View>
      </View> 

    </View>
  );
};

export default Header;
