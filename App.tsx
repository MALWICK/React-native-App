import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import DayListItem from "./src/component/core/DayListItem";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";

const days = [...Array(24)].map((val, index) => index + 1);
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  if (fontsLoaded || fontError) {
    SplashScreen.hideAsync();
  }
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        numColumns={2}
        columnWrapperStyle={styles.column}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
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
