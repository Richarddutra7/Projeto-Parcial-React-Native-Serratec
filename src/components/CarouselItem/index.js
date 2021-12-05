import React from "react";
import { View, Text, Image } from 'react-native';
import styles from "./styles";

function CarouselItem({dados}) {
    return (
        <View style={styles.containerCard}>
            <Image
                source={dados.imagemPath}
                style={styles.image}
            />
            <Text style={styles.nome}>{dados.nome}</Text>
        </View>
    );
}

export default CarouselItem;