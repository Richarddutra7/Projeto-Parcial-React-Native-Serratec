import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight, faQrcode} from '@fortawesome/free-solid-svg-icons';
import menuPerfilData from '../../mock/menuPerfilData';
import menuInferiorPerfilData from '../../mock/menuInferiorPerfilData';
import MenuPerfilItem from '../../components/MenuPerfilItem';
import MenuInferiorPerfilItem from '../../components/MenuInferiorPerfilItem';

const Perfil = () => {
  return (
    <SafeAreaView style={styles.containerPerfil}>
      <View style={styles.containerHeader}>
        <View style={styles.containerInfoUsuario}>
          <Image
            source={require('../../assets/img/original.jpg')}
            style={styles.imagemPerfil}
          />
          <Text style={styles.nomePerfil}>Richard Dutra</Text>
        </View>

        <View style={styles.containerQrcode}>
          <TouchableOpacity>
            <FontAwesomeIcon style={styles.qrcode} icon={faQrcode} size={22} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerApps}>
        <ScrollView style={styles.containerScrollView}>
          <View style={styles.containerConvite}>
            <View style={styles.containerInfoConvite}>
              <Image
                source={require('../../assets/img/iconePresente.png')}
                style={styles.conviteImagem}
              />
              <View>
                <Text style={styles.conviteCupom}>
                  Ganhe R$ 10 indicando o iFood
                </Text>
                <Text style={styles.conviteAmigos}>Convide seus amigos</Text>
              </View>
            </View>
            <FontAwesomeIcon icon={faAngleRight} style={styles.iconeSeta} />
          </View>

          {menuPerfilData.length === 0
            ? ''
            : menuPerfilData.map((item, index) => {
                return <MenuPerfilItem key={index} dados={item} />;
              })}

          <View style={styles.separadorMenus}></View>

          {menuInferiorPerfilData.length === 0
            ? ''
            : menuInferiorPerfilData.map((item, index) => {
                return <MenuInferiorPerfilItem key={index} dados={item} />;
              })}

          <View style={styles.marginFinal}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Perfil;
