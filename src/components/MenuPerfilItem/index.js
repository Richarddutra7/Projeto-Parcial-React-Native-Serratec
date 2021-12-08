import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.js';

function MenuPerfilItem({dados}) {
  return (
    <TouchableOpacity style={styles.containerItemMenuPrincipal}>
      <View style={styles.containerInfoItemMenuPrincipal}>
        <Image
          source={dados.imagemPath}
          style={styles.menuImagem}
        />
        <View>
          <Text style={styles.tituloCard}>{dados.titulo}</Text>
          <Text style={styles.descricaoCard}>{dados.descricao}</Text>
        </View>
      </View>
      <FontAwesomeIcon icon={faAngleRight} style={styles.iconeSetaEscuro} />
    </TouchableOpacity>
  );
}

export default MenuPerfilItem;
