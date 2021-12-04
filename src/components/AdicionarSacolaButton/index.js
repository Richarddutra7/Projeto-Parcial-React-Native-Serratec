import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import styles from "./styles";

function AdicionarSacolaButton() {
  return (
    // <Button
    //   title="Adicionar à sacola"
    //   color="#e00"
    //   accessibilityLabel="Adicionar último pedido à sacola"
    //   style={styles.button}
    // />
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adicionar à sacola</Text>
    </TouchableOpacity>
  );
}

export default AdicionarSacolaButton;