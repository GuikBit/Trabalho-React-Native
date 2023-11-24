import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import ModalNovaEspec from '../../../components/Modal/ModalNovaEspec';

const ButtonIcon = ({ icone, tam, cor, texto, acao }) => {
  const [prim, seg] = texto.split(' ');

  return (
    <View style={styles.view}>      
        <TouchableOpacity style={styles.card} onPress={acao}>
          <View style={styles.cardBody}>
            <TextInput.Icon
              icon={icone}
              iconColor={cor}
              size={tam}
              onTouchCancel={true}
              style={styles.img}
            />

            <View style={styles.titulo}>
              <Text style={styles.texto}>{prim}</Text>
              {seg && <Text style={styles.texto}>{seg}</Text>}
            </View>

             
            </View>
          
        </TouchableOpacity>
        
    </View>
  );
};


export default ButtonIcon;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 12,
  },
  acao: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#2070b4',
    fontSize: 18,
    fontWeight: '500',
  },
  img: {
    top: -20
  }, 
  card: {
    width: 110,
    height: 110,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2e86c9",
    backgroundColor: "#f2f8fd",

  },
  cardBody:{
    width: 110,
    height: 110,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'space-around',
  }, 
  titulo:{
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -20
  }
});
