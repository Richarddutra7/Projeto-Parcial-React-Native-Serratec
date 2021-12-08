import React from "react";
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from "./styles";

function CarouselItem({dados}) {
    return (
        <TouchableOpacity style={styles.containerCard}>
            <Image
                source={dados.imagemPath}
                style={styles.image}
            />
            <Text style={styles.nome}>{dados.nome}</Text>
        </TouchableOpacity>
    );
}

export default CarouselItem;