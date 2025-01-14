import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import Colors from "constants/Colors";

import LittleLemonHeader from "components/LittleLemonHeader";
import Footer from "components/Footer";
import WelcomeScreen from "components/WelcomeScreen";

export default function Index() {
	const [feedback, setFeedback] = useState("");

	return (
		<View style={styles.container}>
			<LittleLemonHeader />
			<View style={styles.content}>
				<WelcomeScreen />
				<ScrollView keyboardDismissMode='on-drag'>
					<TextInput
						style={{
							color: "black",
							minHeight: 50,
							margin: 50,
							backgroundColor: "white",
						}}
						value={feedback}
						placeholder={"Put your feedback here"}
						placeholderTextColor={"gray"}
						onChangeText={setFeedback}
					/>
				</ScrollView>
				<Text style={styles.content}>{feedback}</Text>
			</View>
			<View style={styles.footer}>
				<Footer />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.background,
		flex: 1,
	},
	content: {
		flex: 1,
		padding: 10,
	},
	footer: {
		bottom: 0,
		position: "absolute",
		width: "100%",
	},
});
