import { Text, View, ViewStyle } from "react-native";

interface FooterProps {
	ContainerStyle?: ViewStyle;
}

export default function Footer({ ContainerStyle }: FooterProps) {
	return (
		<View style={ContainerStyle}>
			<View
				style={{
					flex: 0.05,
					backgroundColor: "#F4CE14",
				}}>
				<Text
					style={{
						padding: 5,
						fontSize: 20,
						color: "black",
						alignItems: "center",
						textAlign: "center",
						marginBottom: 20,
					}}>
					All rights for you, shocked??
				</Text>
			</View>
		</View>
	);
}
