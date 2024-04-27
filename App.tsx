import { StyleSheet } from "react-native";
import { HomeScreen } from "./src/screen/HomeScreen";
import { ProfileScreen } from "./src/screen/ProfileScreen";
import { BottomBar } from "./src/components/BottomBar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateScreen from "./src/screen/UpdateScreen/UpdateScreen";
import { Login } from "./src/screen/Login";
import { Register } from "./src/screen/Register";


const Stack = createNativeStackNavigator();
function App(): JSX.Element {  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="UpdateMovie" component={UpdateScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
      <BottomBar/>
    </NavigationContainer>
  ); 
    
}

const styles = StyleSheet.create({});

export default App;
