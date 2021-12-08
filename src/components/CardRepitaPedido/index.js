import React from "react";
import {Text, View, Image} from 'react-native';
import styles from './styles';
import ButtonIfood from '../ButtonIfood';

function CardRepitaPedido() {
    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <View style={styles.containerTexto}>
                    <Text style={styles.titulo}>Peça de novo</Text>
                    <View style={styles.linha}>
                        <Text style={[styles.conteudo, styles.itemEsquerda]}>1</Text>
                        <Text style={[styles.conteudo, styles.itemDireita]}>Combinado salmão e hadock - 32 peças</Text>
                    </View>
                </View>
                <View style={styles.containerImg}>
                    <Image
                    source={require('../../assets/img/ultimoPedido.jpg')} 
                    style={styles.imgUltimoPedido} 
                    />
                </View>
            </View>
            <ButtonIfood texto='Adicionar à sacola' />
        </View>
    );
}

export default CardRepitaPedido;