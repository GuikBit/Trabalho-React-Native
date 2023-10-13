import { StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    navigation: {
        headerMode: '',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'black' },       
        
    }, width: {
        width: width,

    }, height: {
        height: height,

    }, btn: {
        backgroundColor: '#FFFFFF',
        borderColor: '#0CC0DF',
        borderWidth: 1,
        width: 150,
        height: 45,
        paddingTop: 5

    }, input:{
        height: 55,
        fontSize: 22,
        

    }, label:{
        fontSize: 20
    }

})