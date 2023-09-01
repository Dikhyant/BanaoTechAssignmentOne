import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/widgets/Card';
import SwipableCard from './src/components/containers/SwipableCard';
import CardStack from './src/components/containers/CardStack';

export default function App() {
  return (
    <View style={styles.container}>
      <CardStack />
      <StatusBar style="auto" />
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
});
