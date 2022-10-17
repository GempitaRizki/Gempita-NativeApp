import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import MenuList from './components/MenuList';
import MenuUtama from './screen/MenuUtama';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-300 dark:bg-black ">
      <View className="flex-row w-full gap-5">
        <Text className="text-2xl font-bold dark:text-white">Tema</Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme}/>
      </View>
      <MenuList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
