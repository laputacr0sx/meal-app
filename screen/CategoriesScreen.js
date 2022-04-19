import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';

import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummyData';

function renderCategoryItem(itemData) {
	return (
		<CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
	);
}

const CategoriesScreen = () => {
	return (
		<View>
			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
				numColumns={2}
			/>
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
