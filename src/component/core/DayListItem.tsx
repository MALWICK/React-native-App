import { Text, View, StyleSheet } from "react-native";

type DayListItem = {
  day: number;
};

function DayListItem({ day }: DayListItem) {
  console.log(day, "pers");

  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>;
    </View>
  );
}

const styles = StyleSheet.create  ({
  box: {
    backgroundColor: "#f9ede3",
    /*   width: 100,
      height: 100, */
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
    fontFamily:'Inter',
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});

export default DayListItem;
