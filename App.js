import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardStack from './src/components/containers/CardStack';
import { Provider } from 'react-redux';
import store from "./src/redux/store";
import StoreInitializer from './src/__test__/storeInitializer';

export default function App() {
  return (
    <Provider store={store}>
      <StoreInitializer />
      <View style={styles.container}>
        <CardStack />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
