import { View, Image, Text } from "react-native"
const beauty = require("../src/assets/image/beauty.png")
const fashion = require("../src/assets/image/fashion.png")
const kids = require("../src/assets/image/kids.png")
const mens = require("../src/assets/image/mens.png")
const womens = require("../src/assets/image/womens.png")

export default function Expo() {
    return (
        <View className='flex-row p-5 justify-between'>
            <View>
                <Image source={beauty} />
                <Text>Beauty</Text>
            </View>
            <View>
                <Image source={fashion} />
                <Text>Fashion</Text>
            </View>
            <View>
                <Image source={kids} />
                <Text>Kids</Text>
            </View>
            <View>
                <Image source={mens} />
                <Text>Mens</Text>
            </View>
            <View>
                <Image source={womens} />
                <Text>Womens</Text>
            </View>
        </View>
    )
}