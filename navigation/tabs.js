import { createBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createBottomTabNavigator

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Keranjang" component={Keranjang} />
        </Tab.Navigator>
    )
}

export default Tabs


