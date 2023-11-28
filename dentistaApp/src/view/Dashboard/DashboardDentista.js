import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React, { useContext, useEffect } from 'react'
import { BarChart, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit'
import { Colors, Dimension } from '../../global/GlobalStyles'
import { AuthContext } from '../../Auth/Auth'
import { useGetAllDashbords, useGetDashBordsDentista } from '../../service/queries/dashbords'
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay'

const DashboardDentista = ({id}) => {

  const { data:dentista, isLoading:dentistaLoading} = useGetDashBordsDentista(id);

  // useEffect(()=>{

  // }, [dentista])
  return (
    <ScrollView >
      
      <View style={{alignItems: 'center', marginTop: 20}}>
      <Text style={styles.tituloGrafico}>Meus Atendimentos</Text>
        {dentistaLoading ? (
          <View style={styles.contLooding}>
            <LoadingOverlay />
          </View>
         
        ):
        (
          <LineChart
            data={{
              labels: dentista.meses,
              datasets: [
                {
                  data: dentista.qtdPorMes
                }
              ]
            }}
            width={Dimension.width - 20} // from react-native
            height={220}
            chartConfig={styles.chatConfig}
            bezier            
            style={{
              marginVertical: 10,
              borderRadius: 16,
              borderWidth: 0.7,
              borderColor: "#54a2dc"
            }}
          />
        )}
      </View>
      
    </ScrollView>
    

  
  )}



export default DashboardDentista

const styles = StyleSheet.create({
  
  chatConfig: 
    {
      backgroundColor: "#f2f8fd",
      backgroundGradientFrom: "#f2f8fd",
      backgroundGradientTo: "#f2f8fd",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(18, 73, 104, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(18, 73, 104, ${opacity})`,
      style: {
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#FFFFFF"
      }
    
  }, tituloGrafico: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary
  }, 
  contLooding: {
    width: Dimension.width - 20,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center'
  }
})