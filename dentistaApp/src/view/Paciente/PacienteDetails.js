import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import globalStyle from '../../../globalStyle';
import PacienteHeader from '../../components/PacienteHeader';
import PacienteBody from '../../components/PacienteBody';
// import { useEffect } from 'react';
// import { useGetPacienteByIdAuth } from '../../service/queries/paciente';
// import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import { AuthContext } from '../../Auth/Auth';
import { useFocusEffect } from '@react-navigation/native';

const PacienteDetails = ({navigation, route}) => {
//  const { userLogged } = useContext(AuthContext);
//  const [user, setUser] = useState();
  
//   console.log(userLogged)

//     useFocusEffect(()=>{
//       console.log()
//       if(userLogged.role === "Admin"){
//         console.log("validei")
//          setUser(userLogged)
//       }
//       else{
//          setUser(route.params?.item)
//       }
//       console.log(user)
//     })
    
  
  return (
    <View style={globalStyle.container}>     
       <>
        <PacienteHeader navigation={navigation} paciente={route.params?.item} />
        <PacienteBody navigation={navigation} paciente={route.params?.item} />
       </>

    </View>
  );
};

export default PacienteDetails;

const styles = StyleSheet.create({});
