import { View, Text, Image } from "react-native"
const Vector = require("../src/assets/image/Vector.png")
const Hrx = require("../src/assets/image/Hrx.png")
const girl = require("../src/assets/image/girl.png")

export default function DealView() {
    return (
        <View>
            <View className='flex-row bg-blue-400 rounded-3xl justify-between p-5'>
                <View>
                    <Text className='font-bold text-white'>Deal of the Day</Text>
                    <Text className='text-white'>22h 55m 20s remaining</Text>
                </View>
                <View className='flex-row gap-2 border-white border p-2 justify-betwen'>
                    <Text className='text-white'>View All</Text>
                    <Image className='' source={Vector} />
                </View>
            </View>
            <View className='flex-row justify-between p-2'>
                <View>
                    <Image className='' source={girl} />
                    <Text className='font-bold'>Women Printend Kurta</Text>
                    <Text className=''>Neque porro quisquam est </Text>
                    <Text className=''>qui dolorem ipsum quia</Text>
                </View>
                <View>
                    <Image className='' source={Hrx} />
                    <Text className='font-bold'>Women Printend Kurta</Text>
                    <Text className=''>Neque porro quisquam est </Text>
                    <Text className=''>qui dolorem ipsum quia</Text>
                </View>
            </View>
        </View>
    )
}