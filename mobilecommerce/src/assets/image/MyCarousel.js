import React from 'react';
import { View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const images = [
  { id: 1, source: require('../image/carsl.png'), caption: 'Légende de la Fleur 1' },
//   { id: 2, source: require('./rest.jpg'), caption: 'Légende de la Fleur 2' },
//   { id: 3, source: require('./logo.jpg'), caption: 'Légende de la Fleur 3' },
];

const MyCarousel = () => {
  const renderItem = ({ item }) => (
    <View className="relative">
      <Image source={item.source} className="w-full h-[300px] object-cover" />
      <View className="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">
        {item.caption}
      </View>
    </View>
  );

  return (
    <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
    />
  );
};

export default MyCarousel;
