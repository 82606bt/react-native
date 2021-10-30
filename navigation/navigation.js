import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Badge } from 'react-native-elements'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screen/HomeScreen';
import ProductsScreen from '../screen/ProductsScreen';
import DetailScreen from '../screen/DetailScreen';
import FavoriteScreen from '../screen/FavoriteScreen';
import FilterScreen from '../screen/FilterScreen';
import CartScreen from '../screen/CartScreen';
import ShowAllScreen from '../screen/ShowAllScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const mainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ title: 'Trang chủ', headerTitleStyle: { alignSelf: 'center' } }}
            />
            <Stack.Screen
                name='ProductsScreen'
                component={ProductsScreen}
                options={{ title: 'Sản Phẩm', headerTitleStyle: { alignSelf: 'center' } }}
            />
            <Stack.Screen
                name='DetailScreen'
                component={DetailScreen}
                options={{ title: 'Chi tiết sản phẩm', headerTitleStyle: { alignSelf: 'center' } }}
            />
        </Stack.Navigator>
    )
}

const favStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='FavoriteScreen' component={FavoriteScreen}
                options={{ title: 'Favorite Screen', headerTitleStyle: { alignSelf: 'center' } }}
            />
        </Stack.Navigator>

    )
}
const cartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='CartScreen' component={CartScreen}
                options={{ title: 'Cart Screen', headerTitleStyle: { alignSelf: 'center' } }}
            />
        </Stack.Navigator>

    )
}

const mainTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'Favorite') {
                        iconName = focused ? 'ios-heart' : 'ios-heart-outline';

                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}

        >
            <Tab.Screen name='Home' component={mainStack} />
            <Tab.Screen name='Favorite' component={favStack} />
            <Tab.Screen name='Cart' component={cartStack} />
        </Tab.Navigator>
    )
}

const filterStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='FilterScreen' component={FilterScreen} />
        </Stack.Navigator>
    )
}
const showAllStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='ShowAllScreen' component={ShowAllScreen} />
        </Stack.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={mainTab} />
                <Drawer.Screen name='Filter' component={filterStack} />
                <Drawer.Screen name='ShowAllShop' component={showAllStack} />
            </Drawer.Navigator>
        </NavigationContainer>

    )

}
const styles = StyleSheet.create({

});

export default Navigation;