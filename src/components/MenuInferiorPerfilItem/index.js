import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.js';

function MenuInferiorPerfilItem({dados}) {
  return (
    <TouchableOpacity style={styles.containerMenuInferior}>
      <View style={styles.containerInfoMenuInferior}>
        <Image
          source={dados.imagemPath}
          style={styles.menuInferiorImagem}
        />
        <Text style={styles.menuInferiorTitulo}>{dados.titulo}</Text>
      </View>
      <FontAwesomeIcon icon={faAngleRight} style={styles.iconeSetaEscuro} />
    </TouchableOpacity>
  );
}

export default MenuInferiorPerfilItem;
