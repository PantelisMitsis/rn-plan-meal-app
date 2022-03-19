import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {
    const catId = props.route.params.categoryId; //insted of props.navigate.params('categoryId') react navigator v4

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>The Category Meal screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button
                title="Go to Categories"
                onPress={() => props.navigation.navigate('Categories')}
            />
        </View>
    );
};

export const categoryMealScreenOptions = navData => {
    const catId = navData.route.params.categoryId;
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        title: selectedCategory.title, //headerTitle also works
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    };

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default CategoryMealScreen;