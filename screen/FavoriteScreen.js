import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import PRODUCTS from '../data/products';
import ProductsScreen from './ProductsScreen';
import { ListItem, Avatar, Badge } from 'react-native-elements';
import { useSelector } from 'react-redux';

const FavoriteScreen = ({ navigation }) => {


    const favoriteData = useSelector(state => state.favProducts)
    useEffect(() => navigation.setOptions({
        title: 'Sản phẩm yêu thích',
        headerTitleStyle: { alignSelf: 'center' },
        headerLeft: () =>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                >
                    <Ionicons
                        name={'ios-menu'} size={50}

                    />
                </TouchableOpacity>
            </View>
    }), [navigation])

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem bottomDivider>
            <TouchableOpacity
                onPress={() => navigation.navigate('DetailScreen',
                    { productId: item.id })}
            >
                <Avatar style={styles.image} source={{ uri: item.image }} />
            </TouchableOpacity>
            <ListItem.Content>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailScreen',
                        { productId: item.id })}
                >
                    <ListItem.Title style={styles.text}>{item.name}
                    </ListItem.Title>
                </TouchableOpacity>
                <ListItem.Subtitle style={styles.title}>{item.title}
                    <Image style={styles.logo} source={{ uri: item.logo }} />
                </ListItem.Subtitle>
                <Badge status={item.status1} containerStyle={styles.status}
                    value={item.status}

                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailScreen',
                        { productId: item.id })}
                >
                    <Ionicons style={styles.icon}
                        name={'ios-eye-outline'} size={22} color='#00aced'

                    />
                </TouchableOpacity>

            </ListItem.Content>
        </ListItem>
    )
    if (favoriteData.length !== 0) {
        return (

            <FlatList
                data={favoriteData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />

        )
    }
    else {
        return (
            <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                    Chưa có sản phẩm thích !
                </Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    text: {
        fontSize: 15,

        fontWeight: 'bold'
    },
    title: {
        color: 'black',
        fontWeight: 'bold'
    },
    view: {

        alignItems: 'center',
        backgroundColor: '#99CED3'

    },
    image: {
        height: 200,
        width: 200,
    },
    status: {
        marginTop: 10
    },

    icon: {
        marginTop: 10
    },
    logo: {
        height: 55,
        width: 55,
    }


});

export default FavoriteScreen;