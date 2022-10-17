import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screen/Login'

const { Navigator, Screen } = createStackNavigator()

const Navigation = () => (
    <NavigationContainer>
        <Navigator initialRouteName='Login'>
            <Screen name="Login" component={Login}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default Navigation