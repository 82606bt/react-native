import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PRODUCTS from '../data/products';
import { useDispatch, useSelector } from 'react-redux';


import { ButtonGroup } from 'react-native-elements/dist/buttons/ButtonGroup';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



const DetailScreen = ({ navigation, route }) => {
    const { productId } = route.params

    const availableProducts = useSelector(state => state.filterProducts)

    const detail = availableProducts.find(item => item.id === productId)
    const favoriteProducts = useSelector(state => state.favProducts)
    const cartProducts = useSelector(state => state.cartProducts)


    const dispatch = useDispatch()

    const buttons = ['40', '41', '42', '43', '44', '45']
    const AddCart = () => {
        dispatch({ type: 'ADD_CART', productId: productId })
    }

    const AddFav = () => {
        dispatch({ type: 'ADD_FAVORITE', productId: productId })
    }

    const Fav = favoriteProducts.some(item => item.id === productId)
    const Cart = cartProducts.some(item => item.id === productId)

    const EnableFav = () => {
        if (Fav === true)
            return <Ionicons name='ios-heart' size={40} color='pink' />
        return <Ionicons name='ios-heart-outline' color='black' size={40} />
    }
    // const EnableCart = () => {
    //     if (Cart === true)
    //         return <Ionicons name='ios-cart' size={40} color='black' />
    //     return <Ionicons name='ios-cart-outline' color='black' size={40} />
    // }


    useEffect(() => navigation.setOptions({
        title: 'Chi tiết sản phẩm',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () =>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => AddFav()}
                >
                    {EnableFav()}
                </TouchableOpacity>
                {/* <TouchableOpacity
                    onPress={() => AddCart()}
                >
                    {EnableCart()}
                </TouchableOpacity> */}
            </View>
    }), [navigation, productId, EnableFav])


    return (
        <View style={styles.view}>

            <Image style={styles.image} source={{ uri: detail.image }} />

            <Text style={styles.text}>{detail.name}</Text>
            <Text style={styles.text}>{detail.title}
                <Image style={styles.logo} source={{ uri: detail.logo }} />
            </Text>
            <Text style={styles.text}>Giá bán:
            <Text style={styles.text1}> {detail.price} ₫</Text>
            </Text>

            <Text style={styles.text}>Select Size</Text>
            <View>
                <ButtonGroup
                    buttons={buttons}
                    containerStyle={{ height: 50 }}
                />
            </View>
            <Button containerStyle={styles.cart}
                onPress={() => AddCart()
                }
                title=" Thêm vào giỏ hàng"
                type="clear"
                titleStyle={styles.titleCart}
                icon={
                    <Icon
                        name="shopping-cart"
                        size={15}
                        color="white"

                    />

                }
            >
            </Button>
            <Button containerStyle={styles.fav}
                onPress={() => AddFav()
                }

                title=" Thêm vào yêu thích"
                type="clear"
                titleStyle={styles.titleFav}
                icon={
                    <Icon
                        name="heart"
                        size={15}
                        color="black"
                        containerStyle={{ marginTop: 20 }}

                    />
                }
            >

            </Button>

            <View style={styles.mota}>
                <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>
                    Mô tả
                </Text>
                <Text style={{ fontSize: 17 }}>
                    {detail.describe}
                </Text>
            </View>

        </View>


    )

}
const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',

    },
    mota: {
        marginTop: 20,

    },
    text1: {
        marginTop: -30,
        fontSize: 20,
    },
    text: {

        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        alignSelf: 'center',
        height: 200,
        width: 200
    },
    logo: {
        height: 60,
        width: 60,
    },
    cart: {

        backgroundColor: 'black',
        marginTop: 10,
        width: 250,
        borderRadius: 250 / 2,
        alignSelf: 'center',


    },
    titleCart: {
        color: 'white'
    },
    titleFav: {
        color: 'black'
    },
    fav: {
        backgroundColor: 'gray',
        marginTop: 10,
        borderRadius: 250 / 2,
        width: 250,
        alignSelf: 'center'

    },

});

export default DetailScreen;