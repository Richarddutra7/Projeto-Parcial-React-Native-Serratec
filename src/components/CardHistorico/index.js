import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import StarRating from 'react-native-star-rating-widget';
import ButtonIfood from '../ButtonIfood';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import styles from './styles';

function CardHistorico({dados}) {
  const [starCount, setStarCount] = useState(dados.estrelas);

  return (
    <TouchableOpacity style={styles.containerCard}>
      <View style={styles.containerInfoRestaurante}>
        <View style={styles.containerImagemENome}>
          <Image
            source={dados.imagemPath}
            style={styles.imagem}
          />
          <Text style={styles.nomeRestaurante}>{dados.nome}</Text>
        </View>
        <FontAwesomeIcon icon={faAngleRight} style={styles.icone} />
      </View>
      <View style={styles.linhaHorizontal} />
      <View>
        <View style={[styles.linha, styles.statusPedido]}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={styles.iconeCheck}
            size={12}
          />
          <Text style={[styles.conteudo, styles.itemDireita]}>
            Pedido {dados.statusPedido} • N° {dados.numeroPedido}
          </Text>
        </View>
        <View style={styles.linha}>
          <Text style={[styles.conteudo, styles.itemEsquerda]}>{dados.quantidade}</Text>
          <Text style={[styles.conteudo, styles.itemDireita]}>
            {dados.descricao}
          </Text>
        </View>
      </View>
      <View style={styles.linhaHorizontal} />
      <TouchableOpacity style={styles.containerAvaliacao}>
        <Text style={styles.avaliacaoTexto}>Avaliação</Text>
        <StarRating
          rating={starCount}
          onChange={setStarCount}
          emptyColor="#888"
          minRating={0}
          enableHalfStar={false}
          color="#eea035"
          starSize={18}
          animationConfig={{
            scale: 1,
          }}
        />
      </TouchableOpacity>
      <View style={styles.linhaHorizontal} />
      <View style={styles.linhaBotoes}>
        <ButtonIfood inverted={true} texto='Ajuda' />
        <ButtonIfood inverted={true} texto='Adicionar à sacola' />
      </View>
    </TouchableOpacity>
  );
}

export default CardHistorico;
