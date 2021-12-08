import React from 'react';
import {ScrollView, Text} from 'react-native';
import CardRepitaPedido from '../../components/CardRepitaPedido';
import Carousel from '../../components/Carousel';
import ItemHistorico from '../../components/ItemHistorico'
import styles from './styles';
import pedidoData from '../../mock/PedidoData';

const Pedidos = () => {
  

  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <Text style={styles.titulo}>MEUS PEDIDOS</Text>
      <CardRepitaPedido />
      <Text style={styles.subtitulo}>Mais Pedidos por você</Text>
      <Carousel />
      <Text style={styles.subtitulo}>Histórico</Text>
      {
        pedidoData.length == 0
        ? ""
        : pedidoData.map((pedido, index) => {
            return (<ItemHistorico key={index} dados={pedido}/>);
        })
      }
      {/* <ItemHistorico />
      <ItemHistorico />
      <ItemHistorico /> */}
    </ScrollView>
  );
};

export default Pedidos;
