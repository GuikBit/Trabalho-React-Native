import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'
import { LineChart, PieChart, ProgressChart } from 'react-native-chart-kit'
import { Dimension } from '../../global/GlobalStyles'

const Dashboard = () => {
  return (
    <ScrollView>
      <View>
      <View>
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
          width={Dimension.width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={styles.chatConfig}
          bezier
          style={{
            margin: 10,
            borderRadius: 16,

          }}
        />
      </View>

      <View>
        <Text>Grafico 2</Text>
        <ProgressChart
          data={[0.4, 0.6, 0.8]}
          width={Dimension.width}
          height={220}
          style={{
            margin: 10,
            borderRadius: 16,
            
          }}
          chartConfig={styles.chatConfig}
        />
      </View>
      <View>
        <Text>Grafico 3</Text>
        <PieChart
          data={[
            { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'New York', population: 8538000, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
          ]}
          width={Dimension.width}
          height={220}
          chartConfig={styles.chatConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>
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
      //color: "#124968",
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