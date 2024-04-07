import { View, Text, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native'
import { Image } from 'react-native';
import Header from './Header';
import Search from './Search';
import Expo from './Expo';
import DealView from './DealView';
const carsl = require("../src/assets/image/carsl.png")
const offer = require("../src/assets/image/offer.png")

export default function Homline() {

    return (
        <ScrollView>
            <View className=''>
                <Header />
                <Search />
                <Expo />
                <View className='p-2'>
                    <Image className='' source={carsl} />
                </View>
                <DealView />
                
                {/* <Button title="Scroll Down" onPress={scrollDown} /> */}
                <View className='flex-row justify-between p-4'>
                    <View>
                        <Image source={offer} />
                    </View>
                    <View className='mr-10'>
                        <Text className='font-bold'>Special Offers</Text>
                        <Text>We make sure you get the </Text>
                        <Text>offer you need at best prices</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}