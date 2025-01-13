import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "../components/LittleLemonHeader";
import Footer from "../components/Footer";
import WelcomeScreen from "../components/WelcomeScreen";

export default function Index() {
	return (
		<View style={styles.container}>
			<LittleLemonHeader />
			<View style={styles.content}>
				<WelcomeScreen />
			</View>
			<Footer ContainerStyle={styles.footer} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#495E57",
		flex: 1,
	},
	content: {
		alignItems: "center",
		flex: 1,
		padding: 10,
	},
	footer: {
		bottom: 0,
		position: "absolute",
		width: "100%",
	},
});
