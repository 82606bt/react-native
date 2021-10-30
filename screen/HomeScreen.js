import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import CATEGORIES from '../data/categories';

const HomeScreen = (props) => {

    useEffect(() => props.navigation.setOptions({
        headerLeft: () =>
            <View>
                <TouchableOpacity
                    onPress={() => props.navigation.openDrawer()}
                >
                    <Ionicons
                        name={'ios-menu'} size={50}

                    />
                </TouchableOpacity>
            </View>
    }), [props.navigation])

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) =>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('ProductsScreen',
                        { categoryId: item.id })}
                >
                    <View style={[styles.view, { backgroundColor: item.color }]}>
                        <Card.Image
                            source={{ uri: item.image }}
                        />

                    </View>
                </TouchableOpacity>
            }
            keyExtractor={item => item.id}
        />
    )
}
const styles = StyleSheet.create({

    text: {
        fontSize: 40
    },
    view: {
        borderWidth: 1,
        margin: 10,
        padding: 10

    }

});

export default HomeScreen;