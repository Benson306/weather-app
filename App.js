import 'react-native-gesture-handler';
import AppStack from './src/stacks/AppStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
          <AppStack />
    </NavigationContainer>
  );
}

