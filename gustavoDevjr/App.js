import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#1f2937',
          tabBarInactiveTintColor: '#6b7280',
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Perfil: 'person-circle-outline',
              Habilidades: 'bulb-outline',
              Projetos: 'briefcase-outline',
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Perfil" component={PerfilScreen} />
        <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
        <Tab.Screen name="Projetos" component={ProjetosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

