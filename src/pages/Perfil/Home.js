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
import {
  faAngleRight,
  faQrcode,
  faQuestionCircle,
  faCog,
  faShieldAlt,
  faStore,
} from '@fortawesome/free-solid-svg-icons';
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

          {/* <TouchableOpacity style={styles.containerItemMenuPrincipal}>
            <View style={styles.containerInfoItemMenuPrincipal}>
              <Image
                source={require('../../assets/img/menu_perfil/menuPerfil1.png')}
                style={styles.menuImagem}
              />
              <View>
                <Text style={styles.tituloCard}>Chats</Text>
                <Text style={styles.descricaoCard}>Minhas conversas</Text>
              </View>
            </View>
            <FontAwesomeIcon icon={faAngleRight} style={styles.iconeSetaEscuro} />
          </TouchableOpacity> */}

          {menuPerfilData.length === 0
            ? ''
            : menuPerfilData.map((item, index) => {
                return <MenuPerfilItem key={index} dados={item} />;
              })}

          <View style={styles.separadorMenus}></View>

              
          {
            menuInferiorPerfilData.length === 0
            ? ""
            : menuInferiorPerfilData.map((item, index) => {
                return <MenuInferiorPerfilItem key={index} dados={item} />
            })
          }
          

          {/* <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faCog}
              style={styles.notificacao}
              size={23}
            />
            <Text> Configurações</Text>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faShieldAlt}
              style={styles.notificacao}
              size={23}
            />
            <Text> Segurança</Text>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faQrcode}
              style={styles.notificacao}
              size={23}
            />
            <Text> Usar no carro</Text>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faStore}
              style={styles.notificacao}
              size={23}
            />
            <Text> Sugerir restaurantes</Text>
          </View> */}
          <View style={styles.marginFinal}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Perfil;
