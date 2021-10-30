import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PRODUCTS from '../data/products';
import { ListItem, Avatar, Badge } from 'react-native-elements';


const ShowAllScreen = ({ navigation }) => {
    const DataAll = PRODUCTS.filter(product => product = PRODUCTS)
    useEffect(() => navigation.setOptions({
        title: 'Tất cả sản phẩm',
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
    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={DataAll}
            renderItem={renderItem}
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
        height: 55,
        width: 55,
    }


});

export default ShowAllScreen;