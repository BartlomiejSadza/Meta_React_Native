import { View, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
	return (
		<View style={screenStyles.container}>
			<Text style={screenStyles.title}>Welcome to Little Lemon</Text>
			<Text style={screenStyles.text}>
				Little Lemon is a charming neighborhood bistro that serves simple food
				and classic cocktails in a lively but casual environment. We would love
				to hear your experience with us!
			</Text>
		</View>
	);
}

const screenStyles = StyleSheet.create({
	container: {
		backgroundColor: "#495E57",
		flex: 1,
	},
	title: {
		color: "#EDEFEE",
		fontSize: 30,
		padding: 40,
		textAlign: "center",
	},
	text: {
		color: "#EDEFEE",
		fontSize: 24,
		marginVertical: 8,
		padding: 20,
		textAlign: "center",
	},
});
