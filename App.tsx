import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import DayListItem from "./src/component/core/DayListItem";

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  return (
    <View style={styles.container}>
      x
      <FlatList
        contentContainerStyle={styles.content}
        numColumns={2}
        columnWrapperStyle={styles.column}
        data={days}
        renderItem={({ item }) => <DayListItem />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 40,
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
