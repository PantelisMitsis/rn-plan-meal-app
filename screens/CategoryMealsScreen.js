import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal screen</Text>
            <Button
                title="Go to Meal Detail"
                onPress={() => props.navigation.replace('MealDetail')}
            />
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


export default CategoryMealScreen;