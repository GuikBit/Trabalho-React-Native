import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React, { useContext, useEffect } from 'react'
import { BarChart, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit'
import { Colors, Dimension } from '../../global/GlobalStyles'
import { AuthContext } from '../../Auth/Auth'
import { useGetAllDashbords, useGetDashBordsDentista } from '../../service/queries/dashbords'
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay'

const Dashboard = ({user, id}) => {

  const { data, isLoading } = useGetAllDashbords();
  const { data:dentista, isLoading:dentistaLoading} = useGetDashBordsDentista(id);
  console.log(dentista)
  useEffect(()=>{

  }, [dentista])
  return (
    <ScrollView >
      
      {user === "admin"?
      <>
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
                  data: data.qtdPorMes
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
              labels: data.dentistas,
              datasets: [{
                data: data.qtdPorDentista
              }]
            }}
            width={Dimension.width - 20}
            height={220}
            style={{
              marginVertical: 10,
              borderRadius: 16,
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
            data= {data.qtdPorEspec}
            la
            width={Dimension.width - 20}
            height={220}
            style={{
              marginVertical: 10,
              borderRadius: 16,
              
            }}
            
            chartConfig={styles.chatConfig}
          />
          // <PieChart
          //   data={data.qtdPorEspec}
          //   width={Dimension.width - 20}
          //   height={220}
          //   chartConfig={styles.chatConfig}
          //   accessor={"population"}
          //   backgroundColor={"transparent"}
          //   paddingLeft={"15"}
          //   center={[10, 50]}
          //   absolute
          // />
        )}
        
      </View> 
      </>
      : 
      <View style={{alignItems: 'center', marginTop: 20}}>
      <Text style={styles.tituloGrafico}>Atendimentos por mês</Text>
        {dentistaLoading ? (
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
                  data: data.qtdPorMes
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

            }}
          />
        )}
      </View>
      }
      
    </ScrollView>
    

  
  )}



export default Dashboard

const styles = StyleSheet.create({
  
  chatConfig: 
    {
     
      backgroundColor: "#f2f8fd",
      backgroundGradientFrom: "#f1f9fe",
      backgroundGradientTo: "#e2f2fc",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(18, 73, 104, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(18, 73, 104, ${opacity})`,
      style: {
        borderRadius: 16,   
        fontSize: 5,   
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