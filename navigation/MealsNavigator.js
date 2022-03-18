import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator()

const MealsNavigator = props => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName= "Categories">
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
};

export default MealsNavigator;


//createaAppContainer == NavigationContainer