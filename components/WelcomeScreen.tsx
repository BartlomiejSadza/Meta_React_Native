import { View, Text, StyleSheet } from "react-native";
import Colors from "constants/Colors";

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
		flex: 0.4,
	},
	title: {
		color: Colors.text,
		fontSize: 30,
		padding: 20,
		textAlign: "center",
	},
	text: {
		color: Colors.text,
		fontSize: 24,
		marginVertical: 8,
		padding: 20,
		textAlign: "center",
	},
});
