import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';

const MealItem = ({ itemData }) => {
	return (
		<View style={styles.rootContainer}>
			<Pressable android_ripple={{ color: 'black' }}>
				<View>
					<Image
						source={{ uri: itemData.item.imageUrl }}
						style={{ width: 200, height: 200 }}
					/>
					<Text style={styles.title}>{itemData.item.title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	rootContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
