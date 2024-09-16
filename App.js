import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    NotoSansJP: require('./assets/fonts/NotoSansJP-Regular.ttf'),
    JacquesFrancoisShadow: require('./assets/fonts/JacquesFrancoisShadow-Regular.ttf')
  })

  if(!loaded){
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> My heading</Text>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'JacquesFrancoisShadow',
    fontSize: 20,
  }
});
