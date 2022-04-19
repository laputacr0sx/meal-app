import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screen/CategoriesScreen';
import MealsOverviewScreen from './screen/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='MealsCategories' component={CategoriesScreen} />
					<Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({});
