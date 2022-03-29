import {View, FlatList, StyleSheet} from 'react-native';

import MealItem from './MealItem';

function MealsList({items}) {

  function renderMealDetail(itemData) {
    return (<MealItem
      id={itemData.item.id}
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
        data={items}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealDetail}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center'
  }
});


export default MealsList;