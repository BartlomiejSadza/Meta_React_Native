import { View, Text, ScrollView, StyleSheet } from "react-native";

const list: string[] = [
	" Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
];

export default function MenuItems() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Menu List</Text>
			<ScrollView horizontal={true}>
				<Text style={styles.list}>{list}</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.5,
		position: "relative",
	},
	title: {
		fontSize: 40,
		color: "white",
		fontWeight: 500,
	},
	list: {
		fontSize: 20,
		color: "white",
		fontWeight: 300,
	},
});
