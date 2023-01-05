import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import MainScreen from './screens/MainScreen';
import Splash from './screens/Splash';


const Stack = createNativeStackNavigator();
const AppNavigater=()=>{

  return (
    <NavigationContainer >
      <Stack.Navigator  initialRouteName="">
        <Stack.Screen component={ Splash} name=" splash" options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigater;