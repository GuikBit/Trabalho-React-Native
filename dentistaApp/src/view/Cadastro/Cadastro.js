import React, { useState } from "react"
import { ScrollView ,View, StyleSheet, Dimensions, Text} from "react-native"
import { TextInput, Button, HelperText, ActivityIndicator, MD2Colors} from "react-native-paper";
import globalStyle from "../../../globalStyle";
import CadastroUser from "./Utils/CadastroUser";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Cadastro = () => {


  return (
    <ScrollView style={globalStyle.container}>
      <Text style={globalStyle.titulo}>Novo Usuário</Text>
      <View>
       <CadastroUser/>
        
      </View>
    </ScrollView>
  )
}

export default Cadastro

const styles = StyleSheet.create({})