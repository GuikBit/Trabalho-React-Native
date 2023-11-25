import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import NovoDentista from './NovoDentista';
import globalStyle from '../../../globalStyle';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { useGetDentistaByIdAuth } from '../../service/queries/dentista';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';


const DentistaDetails = ({route}) => {
  const dentista = route.params?.item || {};
  
  return (
    <View style={globalStyle.container}>

      <NovoDentista paramsDentista={dentista} />
    </View>
  );
};

export default DentistaDetails;

const styles = StyleSheet.create({});
