import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
	return (
		<View style={headerStyles.container}>
			<Text style={headerStyles.title}>Little Lemon</Text>
		</View>
	);
}

const headerStyles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#F4CE14",
		flex: 0.1,
	},
	title: {
		bottom: 0,
		color: "black",
		fontSize: 30,
		padding: 10,
	},
});
