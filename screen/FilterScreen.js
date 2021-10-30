import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';


const FilterScreen = ({ navigation, props }) => {

    const [isSale, setIsSale] = useState(false)
    const [isBrandNew, setIsBrandNew] = useState(false)

    const dispatch = useDispatch()

    const saveFilter = () => {
        const filters = {
            isSale: isSale,
            isBrandNew: isBrandNew,
        }
        dispatch({ type: 'FILTER_PRODUCT', filters: filters })
    }

    const deleteFilter = () => {
        setIsBrandNew(false)
        setIsSale(false)
        dispatch({ type: 'DELETE_FILTER' })
    }

    useEffect(() => navigation.setOptions({

        headerLeft: () =>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                >
                    <Ionicons
                        name={'ios-menu'} size={50}

                    />
                </TouchableOpacity>
            </View>,
        headerRight: () =>
            <TouchableOpacity
                onPress={() =>
                    saveFilter()
                }
            >
                <Ionicons name='ios-save-outline' size={35} />
            </TouchableOpacity>
    }), [navigation, isSale, isBrandNew])
    return (
        <View>
            <View style={styles.view}>
                <Text style={styles.text}>
                    Hàng mới
                </Text>
                <Switch style={styles.switch} value={isBrandNew} onValueChange={(newValue) => setIsBrandNew(newValue)} />
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>
                    Hàng khuyến mãi
                </Text>
                <Switch style={styles.switch} value={isSale} onValueChange={(newValue) => setIsSale(newValue)} />
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>
                    Xoá bộ lọc
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        deleteFilter()
                    }}

                >
                    <AntDesign name="delete" size={35} color="black" />
                </TouchableOpacity>
            </View>


        </View>

    )

}
const styles = StyleSheet.create({
    view: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    switch: {
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        alignSelf: 'center'
    }

});

export default FilterScreen;