import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import CardRepitaPedido from '../../components/CardRepitaPedido';
import Carousel from '../../components/Carousel';
import ItemHistorico from '../../components/ItemHistorico';
import styles from './styles';
import pedidoData from '../../mock/PedidoData';

const Pedidos = () => {
  return (
    <SafeAreaView style={styles.containerPedidos}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>MEUS PEDIDOS</Text>
        <CardRepitaPedido />
        <Text style={styles.subtitulo}>Mais Pedidos por você</Text>
        <Carousel />
        <Text style={styles.subtitulo}>Histórico</Text>
        {pedidoData.length == 0
          ? ''
          : pedidoData.map((pedido, index) => {
              return <ItemHistorico key={index} dados={pedido} />;
            })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pedidos;
