import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import Welcome from './src/Welcome';
import Homline from './src/Homline';
import ShowingAll from './src/ShowingAll';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-ionicons';

const Home = 'Home';
const Wishlist = 'Show';
const settings = 'Setting';
const About = 'Show';
export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
             
            let rn = route.name ;
            if (rn === Home) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === Wishlist) {
              iconName = focused ? 'settings' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'black',
            height: 60,
            padding: 10,
          },
          labelStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            paddingBottom: 10,
          },
          showIcon: true,
          showLabel: true,
        }}
      >
        <Tab.Screen name="Home" component={Homline} />
        <Tab.Screen name="Wishlist" component={ShowingAll} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


