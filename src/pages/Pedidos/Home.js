import React from 'react';
import {View, Text} from 'react-native';
import CardRepitaPedido from '../../components/CardRepitaPedido';
import Carousel from '../../components/Carousel';
import styles from './styles';

const Pedidos = () => {
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MEUS PEDIDOS</Text>
      <CardRepitaPedido />
      <Text style={styles.subtitulo}>Mais Pedidos por você</Text>
      <Carousel />
      <Text style={styles.subtitulo}>Histórico</Text>
      
    </View>
  );
};

export default Pedidos;
