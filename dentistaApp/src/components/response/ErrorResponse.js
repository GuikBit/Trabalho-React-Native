import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorResponse = () => {
  return (
    <View style={styles.error}>
      <Text style={styles.text}>Ocorreu um erro</Text>
    </View>
  )
}

export default ErrorResponse

const styles = StyleSheet.create({
  error: {
    backgroundColor: '#fef3f2',
    height: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: "#f44336"
  }, 
  text:{
    color: "#f44336",
    fontSize: 18,
    fontWeight: 'bold'
  }
})