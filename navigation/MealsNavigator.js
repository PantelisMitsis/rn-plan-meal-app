import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen, { categoriesScreenOptions } from '../screens/CategoriesScreen';
import CategoryMealsScreen, { categoryMealScreenOptions } from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';



const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};


const MealStackNavigator = createNativeStackNavigator()

const MealsNavigator = props => {
    return <NavigationContainer>
        <MealStackNavigator.Navigator initialRouteName="Categories" screenOptions={defaultNavOptions}>
            <MealStackNavigator.Screen name="Categories" component={CategoriesScreen} options={categoriesScreenOptions} />
            <MealStackNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen} options={categoryMealScreenOptions} />
        </MealStackNavigator.Navigator>
    </NavigationContainer>
};

export default MealsNavigator;


//createaAppContainer == NavigationContainer