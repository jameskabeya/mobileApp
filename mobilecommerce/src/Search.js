import { View, TextInput, Image, Text } from "react-native"
const search = require("../src/assets/image/search.png")
const micro = require("../src/assets/image/micro.png")
const sort = require("../src/assets/image/sort.png")
const filter = require("../src/assets/image/filter.png")

export default function Search() {
    return (
        <View>
            <View className='justify-center  gap-10 flex-row items-center '>
                <Image className='' source={search} />
                <View>
                    <TextInput placeholder="Saisissez du texte ici..." />
                </View>
                <Image className='' source={micro} />
            </View>
            <View className='flex-row justify-between p-5'>
                <Text className='font-bold'>All Featured</Text>
                <View className='flex-row ml-20 bg-gray-300'>
                    <Text>Sort</Text>
                    <Image source={sort} />
                </View>
                <View className='flex-row bg-gray-300'>
                    <Text>Filter</Text>
                    <Image source={filter} />
                </View>
            </View>
        </View>
    )
}