import { createStackNavigator } from "@react-navigation/stack";
import Start from "../pages/start";
import BottomRoutes from "./button.routes";

export default function Routes() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Start"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
        </Stack.Navigator>
    );
}