import {
	View,
	StyleSheet,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
	Alert,
} from "react-native";
import { useState } from "react";
import Colors from "constants/Colors";

import LittleLemonHeader from "components/LittleLemonHeader";
import Footer from "components/Footer";
import WelcomeScreen from "components/WelcomeScreen";

export default function Index() {
	const [email, onChangeEmail] = useState("");
	const [password, onChangePassword] = useState("");

	return (
		<View style={styles.container}>
			<LittleLemonHeader />
			<View style={styles.content}>
				<WelcomeScreen />
				<KeyboardAvoidingView behavior='padding'>
					<ScrollView keyboardDismissMode='on-drag'>
						<TextInput
							style={styles.textInput}
							value={email}
							onChangeText={onChangeEmail}
							placeholder={"email"}
							placeholderTextColor={"gray"}
							keyboardType={"email-address"}
							onFocus={() => Alert.alert("email was focussed")}
						/>
						<TextInput
							style={styles.textInput}
							value={password}
							onChangeText={onChangePassword}
							placeholder={"password"}
							placeholderTextColor={"gray"}
							keyboardType={"default"}
							secureTextEntry={true}
							onFocus={() => Alert.alert("password was focussed")}
						/>
					</ScrollView>
				</KeyboardAvoidingView>
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
	textInput: {
		color: "black",
		minHeight: 50,
		margin: 50,
		textAlign: "justify",
		backgroundColor: "white",
	},
});
