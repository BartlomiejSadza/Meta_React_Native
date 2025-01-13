import { View, Text, StyleSheet } from "react-native";
import Colors from "constants/Colors";

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
		backgroundColor: Colors.heading,
		flex: 0.15,
	},
	title: {
		marginTop: 50,
		color: Colors.text,
		fontSize: 30,
		padding: 10,
	},
});
