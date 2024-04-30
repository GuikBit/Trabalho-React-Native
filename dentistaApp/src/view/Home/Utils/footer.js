import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Menus from './Menus';

const footer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient        
        colors={["#2070b4", "#1e7bbd", "#1c85c7", "#1c90cf", "#1e9bd8", "#309ed9", "#3ea1d9", "#49a4da", "#599fd3", "#669bcc", "#6f96c4", "#7692bc"]}
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