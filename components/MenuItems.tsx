import { View, Text, StyleSheet, SectionList } from "react-native";
import Colors from "constants/Colors";

const menuItemsToDisplay = [
	{
		title: "Appetizers",
		data: [
			"Hummus",
			"Moutabal",
			"Falafel",
			"Marinated Olives",
			"Kofta",
			"Eggplant Salad",
		],
	},
	{
		title: "Main Dishes",
		data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
	},
	{
		title: "Sides",
		data: [
			"Fries",
			"Buttered Rice",
			"Bread Sticks",
			"Pita Pocket",
			"Lentil Soup",
			"Greek Salad",
			"Rice Pilaf",
		],
	},
	{
		title: "Desserts",
		data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
	},
];

interface MenuSection {
	title: string;
	data: string[];
}

const Item = ({ item }: { item: string }) => {
	return (
		<View style={styles.list}>
			<Text style={styles.list_item}>{item}</Text>
		</View>
	);
};

export default function MenuItems() {
	const renderItem = ({ item }: { item: string }) => <Item item={item} />;

	const renderSectionHeader = ({
		section: { title },
	}: {
		section: MenuSection;
	}) => <Text style={styles.title}>{title}</Text>;

	const Separator = () => <View style={styles.separator} />;

	return (
		<View style={styles.container}>
			<SectionList
				keyExtractor={(item) => item}
				sections={menuItemsToDisplay}
				renderItem={renderItem}
				renderSectionHeader={renderSectionHeader}
				ItemSeparatorComponent={Separator}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.5,
		// position: "relative",
	},
	title: {
		fontSize: 40,
		color: Colors.text,
		fontWeight: 500,
		marginBottom: 10,
	},
	list: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
	},
	list_item: {
		fontSize: 20,
		color: Colors.text,
		fontWeight: 300,
	},
	separator: {
		height: 0.5,
		width: "100%",
		margin: 10,
		backgroundColor: "#D3D3D3",
	},
});
