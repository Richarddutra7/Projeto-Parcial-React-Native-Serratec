import React from 'react';
import {ScrollView, Text, View, Image, SafeAreaView} from 'react-native';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faGift,
  faQrcode,
  faCommentDots,
  faBell,
  faWallet,
  faCreditCard,
  faTags,
  faPlusSquare,
  faTicketAlt,
  faHeart,
  faMapMarkerAlt,
  faAddressBook,
  faHandHoldingUsd,
  faQuestionCircle,
  faCog,
  faShieldAlt,
  faStore,
} from '@fortawesome/free-solid-svg-icons';

const Perfil = () => {
  return (
    <SafeAreaView style={styles.containerHearder}>
      <View style={styles.containerQrcode}>
        <FontAwesomeIcon style={styles.qrcode} icon={faQrcode} size={23} />
      </View>

      <View style={styles.containerPerfil}>
        <Image
          source={require('../../assets/img/original.jpg')}
          style={styles.imagem}
        />
        <Text> Richard Dutra</Text>
      </View>
      <View style={styles.containerApps}>
        <ScrollView style={styles.containerScrollView}>
          <View style={styles.containerConvite}>
            <FontAwesomeIcon icon={faGift} style={styles.convidar} size={23} />
            <View>
              <Text> Ganhe R$ 10 indicando o iFood</Text>
              <Text> Convide seus amigos</Text>
            </View>
          </View>

          <View style={styles.containerChat}>
            <FontAwesomeIcon
              icon={faCommentDots}
              style={styles.chat}
              size={23}
            />
            <View>
              <Text> Chats</Text>
              <Text> Minhas conversas</Text>
            </View>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faBell}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Notificação</Text>
              <Text> Minha central de notificações</Text>
            </View>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faWallet}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Carteira</Text>
              <Text> Meus saldo e QR code</Text>
            </View>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faTicketAlt}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Clube iFood</Text>
              <Text> Meus pacotes de descontos</Text>
            </View>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faTags}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Cupons</Text>
              <Text> Meus cupons de desconto</Text>
            </View>
          </View>
         
          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faPlusSquare}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Fidelidade</Text>
              <Text> Minhas fidelidades</Text>
            </View>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faHeart}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Favoritos</Text>
              <Text> Meus locais favoritos</Text>
            </View>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faCommentDots}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Feed</Text>
              <Text> Acompanhe seus locais favoritos</Text>
            </View>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faCreditCard}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Formas de pagamento</Text>
              <Text> Minhas formas de pagamentos </Text>
            </View>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Endereços</Text>
              <Text> Meus endereços de entrega </Text>
            </View>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faAddressBook}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Meus dados</Text>
              <Text> Minhas informações de conta </Text>
            </View>
          </View>

          <View style={styles.containerNotificacao}>
            <FontAwesomeIcon
              icon={faHandHoldingUsd}
              style={styles.notificacao}
              size={23}
            />
            <View>
              <Text> Doações</Text>
              <Text> Minhas doações </Text>
            </View>
          </View>

          <View style={styles.containerAjuda}>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={styles.ajuda}
              size={23}
            />
            <Text> Ajuda</Text>
          </View>

          <View style={styles.containerNotificacao}>
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
          </View>
          <View style={styles.marginFinal}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Perfil;
