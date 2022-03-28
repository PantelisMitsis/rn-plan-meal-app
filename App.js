import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories' screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories'
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            /* options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              return {
                title: catId
              };
             }} */
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
