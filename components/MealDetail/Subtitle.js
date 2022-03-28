import { View, Text, StyleSheet } from 'react-native';


function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: 'open-sans-bold',
    color: '#e2b497',
    fontSize: 18,
    textAlign: 'center',
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2
  }
});

export default Subtitle;