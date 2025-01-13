import { Text, View, StyleSheet } from "react-native";
import Colors from "constants/Colors";

export default function Footer() {
	return (
		<View style={styles.container}>
			<View style={{}}>
				<Text style={styles.title}>All rights for you, shocked??</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.1,
		position: "relative",
		backgroundColor: Colors.heading,
	},
	title: {
		padding: 5,
		fontSize: 20,
		color: Colors.text,
		alignItems: "center",
		textAlign: "center",
		marginBottom: 20,
	},
});
