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
        <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
            <View className="bg-white rounded-xl">
                <Image 
                source={{ uri: image}} 
                className="w-full h-72"
                style={{ resizeMode: "contain "}}
                />
            </View>
            <View className="mt-5">
                <Text className="text-sm text-black/60 dark:text-white/70">
                {category}
                </Text>

                <Text className="text-lg font-semibold dark:text-white">
                {namaMenu}
                </Text>
                <View>
                    <AntDesign
                        name='minuscircleo'
                        size={24}
                        color={colorScheme === "light" ? "black" : "white"}
                        onPress={() => setCount(count -1)}
                    />
                </View>

                <Text>{keterangan}</Text>
                <Text>{harga}</Text>
            </View>

        </View>
    )
}