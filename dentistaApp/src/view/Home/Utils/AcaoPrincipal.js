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
        backgroundColor: "#309ed9",  //2D8ACD        
        elevation: 5

    }, consulta: {
        width: 95,
        height: 65,
        borderRadius: 50,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        
    }, texto: {
        position: 'absolute',
        color: "#FFFFFF",
        fontWeight: 'bold',
        bottom: 0,
        fontSize: 15
    }
})