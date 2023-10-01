import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
  },
  view1: {
    position: 'absolute',
    marginTop: 100,
    marginLeft: 120,
  },
  image: {
    height: 150,
    width: 150,
  },
  view2: {
    position: 'absolute',
    marginTop: 300,
    marginLeft: 95,
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  view3: {
    positiopn: 'absolute',
    marginTop: 430,
    marginLeft: 10,
    marginLeft: 10,
  },
  text3: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  view4: {
    position: 'absolute',
    marginTop: 500,
    marginLeft: 30,
    flexDirection: 'row',
  },
  button: {
    fontSize: 23,
    fontWeight: 'bold',
    backgroundColor: '#EEB422',
    height: 55,
    width: 140,
    textAlign: 'center',
    borderRadius: 10,
    marginRight: 50,
  },
});
const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.view1}>
          <Image style={styles.image} source={require('./assets/Ellipse 8.png')}/>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text1}>GROW</Text>
          <Text style={styles.text1}>YOUR BUSINESS</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text3}>We will help you to grow 
          your business using online server</Text>
        </View>
        <View style={styles.view4}>
          <Text role="button" style={styles.button}>
            LOGIN
          </Text>
          <Text role="button" style={styles.button}>
            SIGN UP
          </Text>
        </View>
    </View>
  );
};
export default App;
