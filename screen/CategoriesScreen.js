import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';

import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummyData';

const CategoriesScreen = ({ navigation }) => {
	function renderCategoryItem(itemData) {
		function gridPressHandler() {
			navigation.navigate('MealsOverview', {
				categoryID: itemData.item.id,
			});
		}

		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={gridPressHandler}
			/>
		);
	}

	return (
		<View>
			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem.bind()}
				numColumns={2}
			/>
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
