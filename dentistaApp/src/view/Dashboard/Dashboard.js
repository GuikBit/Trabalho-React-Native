import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React, { useContext, useEffect } from 'react'
import { BarChart, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit'
import { Colors, Dimension } from '../../global/GlobalStyles'
import { AuthContext } from '../../Auth/Auth'
import { useGetAllDashbords, useGetDashBordsDentista } from '../../service/queries/dashbords'
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay'

const Dashboard = () => {

  const { data, isLoading } = useGetAllDashbords();

  return (
    <ScrollView >
      
      <View style={{alignItems: 'center', marginTop: 20}}>
      <Text style={styles.tituloGrafico}>Atendimentos por mês</Text>
        {isLoading ? (
          <View style={styles.contLooding}>
            <LoadingOverlay />
          </View>
         
        ):
        (
          <LineChart
            data={{
              labels: data.meses,
              datasets: [
                {
                  data: data.qtdMes
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
              borderWidth: 1,
              borderColor: "#54a2dc"
            }}
          />
        )}
      </View>

      <View style={{alignItems: 'center', marginTop: 20}}>
      <Text style={styles.tituloGrafico}>Atendimentos por dentistas</Text>
        
      {isLoading ? (
          <View style={styles.contLooding}>
            <LoadingOverlay />
          </View>
         
        ):(
          <BarChart
            data={{
              labels: data.dentistasList,
              datasets: [{
                data: data.qtdConsultasDentistaMes
              }]
            }}
            width={Dimension.width - 20}
            height={220}
            style={{
              marginVertical: 10,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#54a2dc"
            }}
            chartConfig={styles.chatConfig}
          />
        )}
        
      </View>
      
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={styles.tituloGrafico}>Atendimentos por especialidade</Text>
        
        {isLoading ? (
          <View style={styles.contLooding}>
            <LoadingOverlay />
          </View>
         
        ):(
          <ProgressChart
            data= {data.qtdEspecialidade}            
            width={Dimension.width - 20}
            height={220}
            style={{
              marginVertical: 10,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#54a2dc"
              
            }}
            
            chartConfig={styles.chatConfig}
          />
        )}
        
      </View> 
      
    </ScrollView>
  
  )}



export default Dashboard

const styles = StyleSheet.create({
  
  chatConfig: 
    {
      backgroundGradientFrom: "#f2f8fd",
      backgroundGradientTo: "#f2f8fd",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(36, 170, 227, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(25, 73, 115, ${opacity})`,
      style: {
        borderRadius: 16,   
        fontSize: 5,   
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#f2f8fd",
        
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