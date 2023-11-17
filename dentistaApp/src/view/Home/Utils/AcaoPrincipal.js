import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {TextInput} from 'react-native-paper'
const AcaoPrincipal = ({titulo, acao}) => {
  return (
    <View style={styles.container}>
        <View style={styles.consulta}>
            <TextInput.Icon
            icon="plus"
            iconColor="#FFFFFF"
            size={35}
            style={styles.img}
            onPress={acao}
            />  
            <Text style={styles.texto}>{titulo}</Text>          
        </View>

    </View>
  )
}

export default AcaoPrincipal

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        
    },
    img:{
        backgroundColor: "#2D8ACD",  //2D8ACD
        elevation: 5

    }, consulta: {
        width: 90,
        height: 70,
        borderRadius: 50,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 40,
        
    }, texto: {
        position: 'absolute',
        color: "#FFFFFF",
        fontWeight: 'bold',
        bottom: -24,
        fontSize: 15
    }
})