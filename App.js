import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screen/Login'
import MenuList from './components/MenuList'

const Stack = createStackNavigator();

const Route = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen name="MenuList" component={MenuList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route