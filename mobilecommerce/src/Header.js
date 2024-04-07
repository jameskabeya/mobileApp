const logo = require("../src/assets/image/pro.png");
const rest = require("../src/assets/image/reste.png")
const Group = require("../src/assets/image/Group.png")
import { Image, View } from 'react-native';

export default function Header() {
    return (
        <View>
            <View className='flex justify-between flex-row p-4 mt-10'>
                <Image className='' source={Group} />
                <Image className='' source={rest} />
                <Image className='' source={logo} />
            </View>
        </View>
    )
}