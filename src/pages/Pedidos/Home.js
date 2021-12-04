import React from 'react';
import { Text } from 'react-native';
import CardRepitaPedido from '../../components/CardRepitaPedido';
import styles from './styles';

const Pedidos = () => {
  return (
    <>
      <Text style={styles.titulo}>MEUS PEDIDOS</Text>
      <CardRepitaPedido />
    </>
  );
};

export default Pedidos;
