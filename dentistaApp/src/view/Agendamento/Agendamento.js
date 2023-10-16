import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardAgenda from "../../components/molecules/CardAgenda.js/CardAgenda";

const Agendamento = () => {
  return (
    <View style={styles.outerContainer}>
      <CardAgenda />
      <CardAgenda />
      <CardAgenda />
      <CardAgenda />
      <CardAgenda />
    </View>
  );
};

export default Agendamento;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 15,
  },
});
