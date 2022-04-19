import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import React from 'react';

function CategoryGridTile({ title, color, onPress }) {
	return (
		<View style={[styles.rootContainer]}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => {
					return [styles.button, pressed ? styles.buttonPressed : null];
				}}
				onPress={onPress}>
				<View style={[styles.gridItem, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
}

export default CategoryGridTile;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		margin: 16,
		height: 150,

		borderRadius: 8,
		elevation: 4,

		backgroundColor: 'white',
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
	},
	button: { flex: 1 },
	buttonPressed: { opacity: 0.5 },
	gridItem: {
		flex: 1,
		borderRadius: 8,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
});
