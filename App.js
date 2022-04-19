import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CategoriesScreen from './screen/CategoriesScreen';

export default function App() {
	return (
		<SafeAreaView>
			<StatusBar style='inverted' />
			<CategoriesScreen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
