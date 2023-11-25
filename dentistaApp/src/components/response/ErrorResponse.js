import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { Dimension } from '../../global/GlobalStyles';

const ErrorResponse = ({titulo, onPress, cor}) => {
  return (
    <View style={styles.error}>      
      <Text style={styles.text}>{titulo}</Text>
      <View style={styles.icon}>
        <TextInput.Icon onPress={onPress} icon="close-thick" color={cor}  size={17}/>
      </View>
    </View>
  )
}

export default ErrorResponse

const styles = StyleSheet.create({
  error: {
    backgroundColor: '#fef3f2',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    borderWidth: 0.6,
    borderColor: "#f44336",
    flexDirection: 'row'
  }, 
  text:{
    color: "#f44336",
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  icon: {
    position: 'absolute',
    right: 40,
    top:7
  }
})