import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home/Home';
import Results from './src/views/Results/Results';
import routes from '@Routes/routes';

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name={routes.HOME} component={Home} />
				<Stack.Screen name={routes.RESULTS} component={Results} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
