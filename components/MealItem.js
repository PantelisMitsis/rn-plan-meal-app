import React from 'react';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';


function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    pressed ? styles.buttonPressed : null}
            >
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{duration}m</Text>
                        <Text>{complexity.toUpperCase()}</Text>
                        <Text>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10%'
    },
    buttonPressed: {
        opacity: 0.5
    }
});


export default MealItem;