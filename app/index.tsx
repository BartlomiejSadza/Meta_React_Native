import { View, StyleSheet } from "react-native";
import Colors from "constants/Colors";

import LittleLemonHeader from "components/LittleLemonHeader";
import Footer from "components/Footer";
import WelcomeScreen from "components/WelcomeScreen";
import MenuItems from "components/MenuItems";

export default function Index() {
	return (
		<View style={styles.container}>
			<LittleLemonHeader />
			<View style={styles.content}>
				<WelcomeScreen />
				<MenuItems />
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
