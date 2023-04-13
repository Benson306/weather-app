import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";


const Stack = createStackNavigator();

export default function AppStack(){
    return (
        <Stack.Navigator initialRouteName="LandingPage">
            <Stack.Screen 
                name = "LandingPage"
                component={LandingPage}
            />
            <Stack.Screen 
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}