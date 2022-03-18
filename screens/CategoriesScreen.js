import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Categories screen</Text>
            <Button
                title="Go to Category Meals"
                onPress={() => props.navigation.navigate('CategoryMeals')}
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


export default CategoriesScreen;