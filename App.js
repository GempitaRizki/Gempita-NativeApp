import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import Navigation from './components/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  return (
    <NavigationContainer>
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-300 dark:bg-black ">
      <View className="flex-row w-full gap-5">
        <Text className="text-2xl font-bold dark:text-white">Tema</Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme}/>
      </View>
      <Navigation />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
    </NavigationContainer>
  );
}
