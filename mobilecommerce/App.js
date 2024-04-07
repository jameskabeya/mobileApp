import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import Welcome from './src/Welcome';
import Homline from './src/Homline';

export default function App() {
  return (
    <View className='' >
      {/* <Welcome /> */}
      <Homline />
    </View>
  );
}


