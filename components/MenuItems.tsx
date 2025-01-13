import { View, Text, FlatList, StyleSheet } from "react-native";
import Colors from "constants/Colors";

const menuItemsToDisplay = [
	{ name: "Hummus", price: "$5.00", id: "1A" },
	{ name: "Moutabal", price: "$5.00", id: "2B" },
	{ name: "Falafel", price: "$7.50", id: "3C" },
	{ name: "Marinated Olives", price: "$5.00", id: "4D" },
	{ name: "Kofta", price: "$5.00", id: "5E" },
	{ name: "Eggplant Salad", price: "$8.50", id: "6F" },
	{ name: "Lentil Burger", price: "$10.00", id: "7G" },
	{ name: "Smoked Salmon", price: "$14.00", id: "8H" },
	{ name: "Kofta Burger", price: "$11.00", id: "9I" },
	{ name: "Turkish Kebab", price: "$15.50", id: "10J" },
	{ name: "Fries", price: "$3.00", id: "11K" },
	{ name: "Buttered Rice", price: "$3.00", id: "12L" },
	{ name: "Bread Sticks", price: "$3.00", id: "13M" },
	{ name: "Pita Pocket", price: "$3.00", id: "14N" },
	{ name: "Lentil Soup", price: "$3.75", id: "15O" },
	{ name: "Greek Salad", price: "$6.00", id: "16Q" },
	{ name: "Rice Pilaf", price: "$4.00", id: "17R" },
	{ name: "Baklava", price: "$3.00", id: "18S" },
	{ name: "Tartufo", price: "$3.00", id: "19T" },
	{ name: "Tiramisu", price: "$5.00", id: "20U" },
	{ name: "Panna Cotta", price: "$5.00", id: "21V" },
];

interface Dish {
	name: string;
	price: string;
	id: string;
}

const Item = (item: Dish) => {
	return (
		<View style={styles.list}>
			<Text style={styles.list_item}>{item.name}</Text>
			<Text style={styles.list_item}>{item.price}</Text>
		</View>
	);
};

export default function MenuItems() {
	const renderItem = ({ item }: { item: Dish }) => <Item {...item} />;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Menu List</Text>
			<FlatList
				data={menuItemsToDisplay}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
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
