import React from 'react';
import { View, Text } from 'react-native';
import CardHistorico from '../CardHistorico';
import styles from './styles';

function ItemHistorico({dados}) {
  function geraData() {
    let hoje = new Date(Date.parse(dados.data));
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const meses = [
      'janeiro',
      'fevereiro',
      'março',
      'maio',
      'abril',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    let diaMes;
    if (hoje.getDate() < 10) {
      diaMes = '0' + hoje.getDate();
    } else {
      diaMes = hoje.getDate();
    }

    return diasSemana[hoje.getDay()].concat(
      '. ' +
        diaMes +
        ' ' +
        meses[hoje.getMonth()] +
        ' ' +
        hoje.getUTCFullYear(),
    );
  }

  return (
    <View>
      <Text style={styles.data}>{geraData()}</Text>
      <CardHistorico dados={dados} />
    </View>
  );
}

export default ItemHistorico;
