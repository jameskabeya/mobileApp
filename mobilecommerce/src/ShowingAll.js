import { View, Text, Image } from "react-native"
import Header from "./Header"
import Search from "./Search"
const capish = require("../src/assets/image/capish.png");
const mise = require("../src/assets/image/mise.png");
const favorits = require("../src/assets/image/favorits.png");
const favor = require("../src/assets/image/favor.png");
const jacket = require("../src/assets/image/jacket.png");
const shoeser = require("../src/assets/image/shoeser.png");
const man4 = require("../src/assets/image/man4.png");
const man3 = require("../src/assets/image/man3.png");
const sr1 = require("../src/assets/image/sr1.png");
const sr2 = require("../src/assets/image/sr2.png");
const south1 = require("../src/assets/image/south1.png");
const south2 = require("../src/assets/image/south2.png");
const south3 = require("../src/assets/image/south3.png");
const south4 = require("../src/assets/image/south4.png");
const be1 = require("../src/assets/image/be1.png");
const b2 = require("../src/assets/image/b2.png");
const b3 = require("../src/assets/image/b3.png");
const b4 = require("../src/assets/image/b4.png");
import { ScrollView } from "react-native";
export default function ShowingAll() {
    return (

        <View className=''>
            <Header />
            <ScrollView>
                <Search />
                <View className='flex-row p-2 justify-between'>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className=' ' source={capish} />
                        <Text className='font-bold ml-5'>Black Winter...</Text>
                        <Text>Autumn And Winter Casual</Text>
                        <Text>cotton-padded jacket...</Text>
                        <Text>cotton-padded jacket...</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className=' ' source={mise} />
                        <Text className='font-bold ml-8'>Mens Starry</Text>
                        <Text>Mens Starry Sky Printed </Text>
                        <Text>R2,000</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>

                </View>
                <View className='flex-row p-2 justify-between'>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className=' ' source={jacket} />
                        <Text className='font-bold ml-5'>Black Winter...</Text>
                        <Text>Autumn And Winter Casual</Text>
                        <Text>cotton-padded jacket...</Text>
                        <Text>cotton-padded jacket...</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className=' ' source={shoeser} />
                        <Text className='font-bold ml-8'>Mens Starry</Text>
                        <Text>Mens Starry Sky Printed </Text>
                        <Text>R2,000</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>

                </View>
                <View className='flex-row p-2 justify-between'>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className='w-40 h-20 ' source={man4} />
                        <Text className='font-bold ml-5'>Black Winter...</Text>
                        <Text>Autumn And Winter Casual</Text>
                        <Text>cotton-padded jacket...</Text>
                        <Text>cotton-padded jacket...</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className='w-40 h-40' source={sr1} />
                        <Text className='font-bold ml-8'>Mens Starry</Text>
                        <Text>Mens Starry Sky Printed </Text>
                        <Text>R2,000</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>

                </View>
                <View className='flex-row p-2 justify-between'>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className=' w-40 h-40 ' source={man3} />
                        <Text className='font-bold ml-5'>Black Winter...</Text>
                        <Text>Autumn And Winter Casual</Text>
                        <Text>cotton-padded jacket...</Text>
                        <Text>cotton-padded jacket...</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className='w-40 h-40' source={sr2} />
                        <Text className='font-bold ml-8'>Mens Starry</Text>
                        <Text>Mens Starry Sky Printed </Text>
                        <Text>R2,000</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>

                </View>
                <View className='flex-row p-2 justify-between'>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className=' w-40 h-40' source={south1} />
                        <Text className='font-bold ml-5'>Black Winter...</Text>
                        <Text>Autumn And Winter Casual</Text>
                        <Text>cotton-padded jacket...</Text>
                        <Text>cotton-padded jacket...</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className='w-40 h-40 ' source={south4} />
                        <Text className='font-bold ml-8'>Mens Starry</Text>
                        <Text>Mens Starry Sky Printed </Text>
                        <Text>R2,000</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>

                </View>
                <View className='flex-row p-2 justify-between'>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className='w-40 h-40 ' source={south2} />
                        <Text className='font-bold ml-5'>Black Winter...</Text>
                        <Text>Autumn And Winter Casual</Text>
                        <Text>cotton-padded jacket...</Text>
                        <Text>cotton-padded jacket...</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className='w-40 h-40 ' source={south3} />
                        <Text className='font-bold ml-8'>Mens Starry</Text>
                        <Text>Mens Starry Sky Printed </Text>
                        <Text>R2,000</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>

                </View>
                <View className='flex-row p-2 justify-between'>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className=' w-40 h-40' source={be1} />
                        <Text className='font-bold ml-5'>Black Winter...</Text>
                        <Text>Autumn And Winter Casual</Text>
                        <Text>cotton-padded jacket...</Text>
                        <Text>cotton-padded jacket...</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className='w-40 h-40 ' source={b2} />
                        <Text className='font-bold ml-8'>Mens Starry</Text>
                        <Text>Mens Starry Sky Printed </Text>
                        <Text>R2,000</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>

                </View>
                <View className='flex-row p-2 justify-between'>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className='w-40 h-40 ' source={b3} />
                        <Text className='font-bold ml-5'>Black Winter...</Text>
                        <Text>Autumn And Winter Casual</Text>
                        <Text>cotton-padded jacket...</Text>
                        <Text>cotton-padded jacket...</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>
                    <View className='bg-gray-200 rounded-lg'>
                        <Image className=' w-40 h-40' source={b4} />
                        <Text className='font-bold ml-8'>Mens Starry</Text>
                        <Text>Mens Starry Sky Printed </Text>
                        <Text>R2,000</Text>
                        <View className='flex-row'>
                            <Image source={favorits} />
                            <Image source={favorits} />
                            <Image source={favor} />
                        </View>
                    </View>

                </View>
            </ScrollView >
        </View>

    )
}