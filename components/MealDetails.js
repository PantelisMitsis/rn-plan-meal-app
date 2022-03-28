import { View, Text, StyleSheet } from 'react-native'

function MealDetails({duration, complexity, affordability, style, textStyle}) {
  return (
    <View style={[styles.mealRow, styles.mealDetail, style]}>
      <Text style={[styles.text, textStyle]}>{duration}m</Text>
      <Text style={[styles.text, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.text, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row'
  },
  mealDetail: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%'
  },
  text:{
    fontSize:12
  }
});

export default MealDetails;