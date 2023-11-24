import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SuccessResponse = () => {
  return (
    <View style={styles.sucess}>
        <Text style={styles.text}>Salvo com Sucesso</Text>
    </View>
  )
}

export default SuccessResponse

const styles = StyleSheet.create({
  sucess: {
    backgroundColor: '#e5f3e6',
    height: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: "#529558"
  }, 
  text:{
    color: "#529558",
    fontSize: 18,
    fontWeight: 'bold'
  }
})