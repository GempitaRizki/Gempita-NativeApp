import * as React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'

export default function DetailMenu ({
    image,
    category,
    namaMenu,
    harga,
    keterangan
}) {
    const [count, setCount] = React.useState(1);
    const { colorScheme } = useColorScheme()
    return(
        <View className="w-full bg-white rounded-3xl p-5 my-5">
            <View className="bg-white rounded-xl">
                <Image 
                source={{ uri: image}} 
                className="w-full h-72"
                style={{ resizeMode: "contain "}}
                />
            </View>
            <View className="mt-5">
                <Text className="text-sm text-black/60 ">
                {category}
                </Text>

                <Text className="text-lg font-semibold ">
                {namaMenu}
                </Text>
                <View className="flex-row justify-between my-3">
                <View className="flex-row item-center gap-3">
                    <AntDesign
                        name='minuscircleo'
                        size={24}
                        color={colorScheme === "light" }
                        onPress={() => setCount(count -1)}
                    />

                    <Text className="text-xl ">{count}</Text>
                    <AntDesign
                        name='minuscircleo'
                        size={24}
                        color={colorScheme === "light"}
                        onPress={() => setCount(count +1)}
                    />
                        </View>
                    </View>

                <Text className="text-2xl font-extrabold ">
                    RP{harga * count }
                </Text>

                <Text numberOfLines={2} 
                className="text-sm text-black/60 ">{keterangan}
                </Text>
                <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full">
                    <Text className="text-white dark:text-black font-bold">
                        Masukan Keranjang</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}