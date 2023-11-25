import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
const SuccessResponse = ({titulo, onPress, cor}) => {
  return (
    <View style={styles.sucess}>      
      <Text style={styles.text}>{titulo}</Text>
      <View style={styles.icon}>
        <TextInput.Icon onPress={onPress} icon="close-thick" color={cor}  size={17}/>
      </View>
    </View>
  )
}

export default SuccessResponse

const styles = StyleSheet.create({
  sucess: {
    backgroundColor: '#e5f3e6',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: "#529558",
    flexDirection: 'row'
  }, 
  text:{
    color: "#529558",
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