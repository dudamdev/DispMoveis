import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import Livros from '../screens/Books';
import AddBooks from '../screens/AddBooks';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            title: 'Login',
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            headerStyle: { backgroundColor: '#005C53' },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Cadastro',
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            headerStyle: { backgroundColor: '#005C53' },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Books"
          component={Livros}
          options={{
            title: 'Livros',
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            headerStyle: { backgroundColor: '#005C53' },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="AddBooks"
          component={AddBooks}
          options={{
            title: 'Adicionar Livros',
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            headerStyle: { backgroundColor: '#005C53' },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
