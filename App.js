import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screen/Home'
import MenuList from './components/MenuList'

const Stack = createStackNavigator();

const Route = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen name="DaftarMenu" component={MenuList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route