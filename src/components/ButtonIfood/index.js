import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import styles from "./styles";

function ButtonIfood({inverted, texto}) {
  return (
    <TouchableOpacity style={inverted ? styles.buttonInvertido : styles.button}>
        <Text style={inverted ? styles.buttonTextInvertido : styles.buttonText}>{texto}</Text>
    </TouchableOpacity>
  );
}

export default ButtonIfood;