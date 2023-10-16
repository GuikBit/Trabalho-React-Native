import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StyledText from "../../components/atoms/StyledText";
import { Colors } from "../../global/GlobalStyles";

const Home = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerConatiner}>
        <StyledText style={styles.headerText}>Olá, Zezim</StyledText>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  outerContainer: {
    padding: 15,
    flex: 1,
    backgroundColor: Colors.primaryBackground,
  },
  headerConatiner: {
    flex: 0.1,
    borderColor: "red",
    borderWidth: 1,
  },
  headerText: {
    fontSize: 30,
  },
});
