import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Menu from '../screen/Menu'

const { Navigator, Screen } = createStackNavigator()

const Navigation = () => (
    <NavigationContainer>
        <Navigator initialRouteName='Menu'>
            <Screen name="Menu" component={Menu}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default Navigation