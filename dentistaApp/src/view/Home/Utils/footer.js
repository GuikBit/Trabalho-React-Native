import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Menus from './Menus';

const footer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient        
        colors={["#2e86c9", "#24aae3"]}
        style={styles.container}
        start={ {x: 0.3, y: 0.1} } 
        >
            <Menus navigation={navigation}/>
        </LinearGradient>
    </View>
  )
}

export default footer

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: "100%",
        height: 65,
        alignSelf: 'center',              
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    }
})