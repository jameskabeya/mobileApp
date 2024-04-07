import { View, Text, TextInput, Image } from "react-native"

export default function Product() {
    return (
        <View>
            <View className='flex justify-between flex-row p-4 mt-10'>
                <Image className='' source={Group} />
                <Image className='' source={rest} />
                <Image className='' source={logo} />
            </View>
            <View className='justify-center  gap-10 flex-row items-center '>
                <Image className='' source={search} />
                <View>
                    <TextInput placeholder="Saisissez du texte ici..." />
                </View>
                <Image className='' source={micro} />
            </View>
        </View>
    )
}