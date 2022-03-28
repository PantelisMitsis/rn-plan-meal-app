import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);



    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(cat => cat.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);


    function renderMealItem(itemData) {
        return (<MealItem
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => { }} />
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
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


export default MealsOverviewScreen;