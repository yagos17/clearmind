import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Chat from '../pages/chat';
import Alert from '../pages/alert';
import Setting from '../pages/setting';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Alert" component={Alert} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    );
}