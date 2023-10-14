import { StatusBar,  StyleSheet, View } from 'react-native';
import Navigator from './src/components/Navigator/Navigator';
import { AuthProvider } from "./src/components/Auth/Auth";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
        <StatusBar/>
        <Navigator/>
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
});
