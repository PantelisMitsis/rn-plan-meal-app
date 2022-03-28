import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Pressable
} from 'react-native';

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    [styles.button, pressed ? styles.buttonPressed : null
                    ]}
                onPress={onPress}
            >
                <View style={[styles.container, { backgroundColor: color }]}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        //elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'white', //this attribute is for the IOS. It needw it to display shadow effects
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22
    }
});

export default CategoryGridTile;