import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "constants/Colors";

import LittleLemonHeader from "components/LittleLemonHeader";
import Footer from "components/Footer";
import WelcomeScreen from "components/WelcomeScreen";
import MenuItems from "components/MenuItems";

export default function Index() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<View style={styles.container}>
			<LittleLemonHeader />
			<Image
				source={require("@/assets/images/react-logo.png")}
				style={{
					height: 100,
					width: 300,
					resizeMode: "center",
				}}
			/>
			<View style={styles.content}>
				{!showMenu && <WelcomeScreen />}
				<Pressable
					style={styles.button}
					onPress={() => setShowMenu((prev) => !prev)}>
					<Text style={styles.button_text}>
						{!showMenu ? "Click Here!" : "hide Menu:)"}
					</Text>
				</Pressable>
				{showMenu && <MenuItems />}
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
	button: {
		position: "relative",
		margin: "auto",
		width: 200,
		height: 50,
		alignContent: "center",
		backgroundColor: Colors.white,
		color: Colors.black,
		borderRadius: 10,
		borderWidth: 2,
	},
	button_text: {
		fontSize: 32,
		textAlign: "center",
	},
});
