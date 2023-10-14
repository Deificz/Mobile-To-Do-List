import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Task from './src/components/Task';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.title}>To-do-List</Text>
          <Task/>
          <Task/>
        </View>
      </Provider>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
  },
  title:{
    alignSelf: 'flex-start',
    fontSize: 40,
    fontWeight: 'bold'
  }
});
