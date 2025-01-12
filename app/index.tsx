import { Text, View, StyleSheet } from "react-native";

import LittleLemonHeader from "@/components/LittleLemonHeader";
import Footer from "@/components/Footer";

export default function Index() {
	return (
		<View style={styles.container}>
			<LittleLemonHeader />
			<View style={styles.content}>
				<Text>No tutaj idzie środek strony</Text>
			</View>
			<Footer ContainerStyle={styles.footer} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
	footer: {
		bottom: 0,
		position: "absolute",
		width: "100%",
	},
});
