import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'
import { BarChart, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit'
import { Dimension } from '../../global/GlobalStyles'

const Dashboard = () => {
  return (
    <ScrollView >
      
      <View style={{alignItems: 'center'}}>
        <Text>Grafico em linha</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimension.width - 20} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={styles.chatConfig}
          bezier
          style={{
            marginVertical: 10,
            borderRadius: 16,

          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
      <Text>Grafico 4</Text>
        <BarChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [ 20, 45, 28, 80, 99, 43 ]
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
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>Grafico 2</Text>
        <ProgressChart
          data={[0.4, 0.6, 0.8]}
          width={Dimension.width - 20}
          height={220}
          style={{
            marginVertical: 10,
            borderRadius: 16,
            
          }}
          
          chartConfig={styles.chatConfig}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>Grafico 3</Text>
        <PieChart
          data={[
            { name: 'Seoul', population: 21500000, color: '#b6c7eb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Toronto', population: 2800000, color: '#7686d3', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Beijing', population: 527612, color: '#656fc6', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'New York', population: 8538000, color: '#545bae', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Moscow', population: 11920000, color: '#464d8d', legendFontColor: '#7F7F7F', legendFontSize: 15 }
          ]}
          width={Dimension.width - 20 }
          height={220}
          chartConfig={styles.chatConfig}
          accessor="population"
          backgroundColor="#e2f2fc"
          paddingLeft="15"
          style={{
            marginVertical: 10,
            borderRadius: 16,

          }}
        />
      </View>
      
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
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#FFFFFF"
      }
    
  }
})