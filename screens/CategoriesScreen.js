import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';




function CategoriesScreen({ navigation }) {
    function renderGridItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
                
            });
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};

export const categoriesScreenOptions = {
    title: 'Meal Categories', //same as the headerTitle of react navigation 4
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default CategoriesScreen;