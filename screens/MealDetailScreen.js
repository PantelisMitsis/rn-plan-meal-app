import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MealDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default MealDetailsScreen;