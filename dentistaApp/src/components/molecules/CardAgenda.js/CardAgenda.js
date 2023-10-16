import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StyledText from "../../atoms/StyledText";

const CardAgenda = () => {
  return (
    <View>
      <View>
        <StyledText style={styles.timeText}>10h50</StyledText>
      </View>
    </View>
  );
};

export default CardAgenda;

const styles = StyleSheet.create({
  timeText: {
    fontSize: 20,
  },
});
