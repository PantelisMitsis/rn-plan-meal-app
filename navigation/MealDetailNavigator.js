import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { NavigationContainer } from '@react-navigation/native';


const MealDetailStackNavigator = createNativeStackNavigator()

const MealDetailNavigator = props => {
    return <NavigationContainer>
        <MealDetailStackNavigator.Navigator initialRouteName= "Categories">
            <MealDetailStackNavigator.Screen name="Categories" component={CategoriesScreen} />
            <MealDetailStackNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen} />
            <MealDetailStackNavigator.Screen name="MealDetail" component={MealDetailScreen} />
        </MealDetailStackNavigator.Navigator>
    </NavigationContainer>
};

export default MealDetailNavigator;


//createaAppContainer == NavigationContainer