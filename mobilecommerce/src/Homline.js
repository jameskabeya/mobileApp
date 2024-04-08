import { View, Text, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native'
import { Image } from 'react-native';
import Header from './Header';
import Search from './Search';
import Expo from './Expo';
import DealView from './DealView';
const carsl = require("../src/assets/image/carsl.png")
const offer = require("../src/assets/image/offer.png")
const Vector = require("../src/assets/image/Vector.png")
const rectangle = require("../src/assets/image/rectangle.png")
const calandar = require("../src/assets/image/calandar.png")
const horloge = require("../src/assets/image/horloge.png")
const shoes = require("../src/assets/image/shoes.png")
const annonce = require("../src/assets/image/annonce.png")
const james = require("../src/assets/image/james.png")

export default function Homline() {

    return (
        <View className=''>
            <Header />
            <ScrollView>


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
                <View className='flex-row justify-between p-4'>
                    <View>
                        <Image className='bg-yellow-500' source={rectangle} />
                    </View>
                    <View className=''>
                        <Image className='' source={Vector} />
                        <Text className='font-bold'>Flat and Heels</Text>
                        <Text>Stand a chance to get</Text>
                        <Text>rewarded</Text>
                        <View className='flex-row w-[70%] bg-red-500 border-white border p-1'>
                            <Text className='text-white'>Visit now</Text>
                            <Image className='ml-1 mt-1' source={Vector} />
                        </View>
                    </View>
                </View>
                <View className='bg-pink-500 rounded-lg p-4 justify-between flex-row'>
                    <View>
                        <Text className='font-bold text-white'>Trending Products </Text>
                        <View className='flex-row'>
                            <Image className='text-white' source={calandar} />
                            <Text className='text-white ml-2'>Last Date 29/02/22 </Text>
                        </View>
                    </View>
                    <View className='flex-row border-white border p-1'>
                        <Text className='text-white'>Visit now</Text>
                        <Image className='ml-1 mt-1' source={Vector} />
                    </View>
                </View>
                <View className='flex-row justify-between p-2'>
                    <View>
                        <Image className='' source={horloge} />
                        <Text className='font-bold'>Women Printend Kurta</Text>
                        <Text className=''>Neque porro quisquam est </Text>
                        <Text className=''>qui dolorem ipsum quia</Text>
                    </View>
                    <View>
                        <Image className='' source={shoes} />
                        <Text className='font-bold'>Women Printend Kurta</Text>
                        <Text className=''>Neque porro quisquam est </Text>
                        <Text className=''>qui dolorem ipsum quia</Text>
                    </View>
                    <View>
                        <Image className='' source={shoes} />
                        <Text className='font-bold'>Women Printend Kurta</Text>
                        <Text className=''>Neque porro quisquam est </Text>
                        <Text className=''>qui dolorem ipsum quia</Text>
                    </View>
                </View>
                <View>
                    <Image className='p-2' source={annonce} />
                    <View className='p-4'>
                        <Text className='font-bold'>New Arrivals </Text>
                        <View className='flex-row justify-between'>
                            <Text className=''>Summer’ 25 Collections</Text>
                            <View className='flex-row bg-red-500 border-white border p-1'>
                                <Text className='text-white'>Visit now</Text>
                                <Image className='ml-1 mt-1' source={Vector} />
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text>Sponsored by Bro James Daniel</Text>
                    <Image source={james} />
                </View>
            </ScrollView>
        </View>
    );
}