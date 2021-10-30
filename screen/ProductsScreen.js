import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Avatar, Badge, Tooltip } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import PRODUCTS from '../data/products'
import { Image } from 'react-native';

const ProductsScreen = (props) => {
    const { categoryId } = props.route.params;

    const availableProducts = useSelector(state => state.filterProducts)
    const products = availableProducts.filter(item => item.categoryId === categoryId)


    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem bottomDivider >
            <TouchableOpacity
                onPress={() => props.navigation.navigate('DetailScreen',
                    { productId: item.id })}
            >
                <Avatar style={styles.image} source={{ uri: item.image }} />
            </TouchableOpacity>
            <ListItem.Content>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('DetailScreen',
                        { productId: item.id })}
                >
                    <ListItem.Title style={styles.text}>{item.name}
                    </ListItem.Title>
                </TouchableOpacity>
                <ListItem.Subtitle style={styles.title} >{item.title}
                    <Image style={styles.logo} source={{ uri: item.logo }} />
                </ListItem.Subtitle>
                <Badge status={item.status1} containerStyle={styles.status}
                    value={item.status}

                />
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('DetailScreen',
                        { productId: item.id })}
                >
                    <Ionicons style={styles.icon}
                        name={'ios-eye-outline'} size={22} color='#00aced'

                    />
                </TouchableOpacity>
            </ListItem.Content>
        </ListItem>

    )
    return (

        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )

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
        backgroundColor: 'white'

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

        height: 60,
        width: 60,
    }

});

export default ProductsScreen;