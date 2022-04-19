import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import { MEALS } from '../data/dummyData';

import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route }) => {
	const catId = route.params.categoryID;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	function renderMealItem(itemData) {
		return <MealItem itemData={itemData} />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
