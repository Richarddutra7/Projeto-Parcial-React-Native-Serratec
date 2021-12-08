import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import CarouselItem from '../CarouselItem';
import carouselData from '../../mock/carouselData';
import styles from './styles';

function Carousel() {
  const [dados, setDados] = useState(carouselData);

  return (
    <View style={styles.containerCards}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {dados.length === 0
          ? ''
          : dados.map((item, index) => {
              return <CarouselItem dados={item} key={index} />;
            })}
      </ScrollView>
    </View>
  );
}

export default Carousel;
