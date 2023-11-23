import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import globalStyle from '../../../globalStyle';
import { Button, TextInput } from 'react-native-paper';
import ModalDentista from '../../components/Modal/ModalDentista';
import ModalPaciente from '../../components/Modal/ModalPaciente';
import { useGetDentistasAuth } from '../../service/queries/dentista';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/FontAwesome';
import { AuthContext } from '../../Auth/Auth';
import { GlobalContext } from '../../store/Context';
import { usePostConsultaAuth } from '../../service/queries/consulta';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../global/GlobalStyles'
const NovaConsulta = () => {

  const navigation = useNavigation();
  const { data, isLoading } = useGetDentistasAuth();
  const { mutate } = usePostConsultaAuth();

  const { userLogged } = useContext(AuthContext);
  const { consulta, setConsulta } = useContext(GlobalContext);

  const [modalDent, setModalDent] = useState(false);
  const [modalPac, setModalPac] = useState(false);
  const [pesquisa, setPesquisa] = useState('');
  const [filtro, setFiltro] = useState([]);

  const hideDen = () => setModalDent(false);
  const hidePac = () => setModalPac(false);

  function buscaUsuario(e) {
    setPesquisa(e);

    if (e === '') {
      setFiltro(data);
    } else {
      const pesquisaLowerCase = e.toLowerCase();
      const res = data.filter((user) => {
        const nomeLowerCase = user.nome.toLowerCase();
        return nomeLowerCase.includes(pesquisaLowerCase);
      });
      setFiltro(res);
    }
  }

  const handleNovaConsulta = () => {
    console.log(consulta)
    mutate(consulta);
    navigation.navigate('Lista Consultas');
  };

  const ajustaData = (num) => {
    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 8);
    const dataFormatada = limite.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    setConsulta({ ...consulta, dataConsulta: dataFormatada })
  }
  const ajutaHora = (num) =>{

    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 4);
    const horaFormatada = limite.replace(/(\d{2})(\d{2})/, '$1:$2');
    setConsulta({ ...consulta, horaConsulta: horaFormatada })
  }

  const styleModal = {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    height: 650,
    justifyContent: '',
  };

  return (
    <View style={globalStyle.container}>
      <LinearGradient
        colors={['#2e86c9', '#24aae3']}
        style={globalStyle.headerPesq}
        start={{ x: 0.3, y: 0.1 }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name="chevron-left"
            size={30}
            color="#ECECEC"
            style={{ padding: 8 }}
            onPress={() => {
              navigation.navigate('Lista Consultas');
            }}
          />
          <View style={styles.titulo}>
            <Text style={[globalStyle.titulo]}>Nova Consulta</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView>
        <View style={styles.conulta}>
          {userLogged.role == 'Admin' && (
            <TextInput
              mode="outlined"
              label="Paciente"
              left={
                <TextInput.Icon
                  icon="account"
                  color={Colors.secondary}
                  style={{ paddingTop: 10 }}
                />
              }
              right={
                <TextInput.Icon
                  icon="chevron-down"
                  color={Colors.secondary}
                  style={{ paddingTop: 10 }}
                  onPress={() => {
                    setModalPac(true);
                  }}
                />
              }
              selectionColor={Colors.secondary}
              outlineColor={Colors.secondary}
              outlineStyle={globalStyle.inputRadius}
              activeOutlineColor={Colors.secondary}
              style={globalStyle.input}
              textColor={Colors.secondary}
              value={consulta.paciente.nome}
              labelColor={Colors.secondary}
              editable={false}
            />
          )}
          <TextInput
            mode="outlined"
            label="Dentista"
            left={
              <TextInput.Icon
                icon="account"
                color={Colors.secondary}
                style={{ paddingTop: 10 }}
              />
            }
            right={
              <TextInput.Icon
                icon="chevron-down"
                color={Colors.secondary}
                style={{ paddingTop: 10 }}
                onPress={() => {
                  setModalDent(true);
                }}
              />
            }
            selectionColor={Colors.secondary}
            outlineColor={Colors.secondary}
            outlineStyle={globalStyle.inputRadius}
            activeOutlineColor={Colors.secondary}
            style={globalStyle.input}
            textColor={Colors.secondary}
            value={consulta.dentista.nome}
            labelColor={Colors.secondary}
            editable={false}
          />
          <TextInput
            mode="outlined"
            label="Data"
            left={
              <TextInput.Icon
                icon="calendar"
                color={Colors.secondary}
                style={{ paddingTop: 10 }}
              />
            }
            keyboardType='numeric'
            selectionColor={Colors.secondary}
            outlineColor={Colors.secondary}
            outlineStyle={globalStyle.inputRadius}
            activeOutlineColor={Colors.secondary}
            style={globalStyle.input}
            textColor={Colors.secondary}
            value={consulta.dataConsulta}
            labelColor={Colors.secondary}
            maxLength={10}
            // onChangeText={(e) => {
            //    if (e.length == 8) {
            //     const data = dayjs(e, 'YYYY-MM-DD').format('DD/MM/YYYY');
            //     setConsulta({ ...consulta, dataConsulta: data });
            //    }
            //    if (e.length <= 9) {
            //     setConsulta({ ...consulta, dataConsulta: e });
            //   }
            // }}
            onChangeText={ajustaData}
          />
           
          <TextInput
            mode="outlined"
            label="Hora"
            left={
              <TextInput.Icon
                icon="clock-time-eight-outline"
                color={Colors.secondary}
                style={{ paddingTop: 10 }}
              />
            }
            keyboardType='numeric'
            selectionColor={Colors.secondary}
            outlineColor={Colors.secondary}
            outlineStyle={globalStyle.inputRadius}
            activeOutlineColor={Colors.secondary}
            style={globalStyle.input}
            textColor={Colors.secondary}
            value={consulta.horaConsulta}
            labelColor={Colors.secondary}
            onChangeText={ajutaHora}
          />
          <Button
            icon="content-save"
            textColor="#FFFFFF"
            mode="contained"
            labelStyle={globalStyle.label}
            style={styles.btnConsulta}
            onPress={handleNovaConsulta}
          >
            Agendar Consulta
          </Button>
        </View>
      </ScrollView>

      <ModalDentista
        modalDent={modalDent}
        hideDentis={hideDen}
        buscaUsuario={buscaUsuario}
        pesquisa={pesquisa}
        styleModalDent={styleModal}
        filtro={filtro}
        setFiltro={setFiltro}
      />

      {/* <ModalEspec
        hideEspec={hideEspec}
        pesquisa={pesquisa}
        styleModalEspec={styleModal}
        modalEspec={modalEspec}
      /> */}

      <ModalPaciente
        hidePac={hidePac}
        pesquisa={pesquisa}
        styleModalPac={styleModal}
        modalPac={modalPac}
      />
    </View>
  );
};

export default NovaConsulta;

const styles = StyleSheet.create({
  conulta: {
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderColor: '#2070B4',
    borderWidth: 0.3,
    height: 500,
    margin: 15,
    marginTop: 120,
    padding: 15,
    borderRadius: 15,
  },
  btnConsulta: {
    margin: 20,
    backgroundColor: '#2070B4',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    fontSize: 22,
    backgroundColor: '#FFFFFF',
  },
  btnModalbtnSelecionar: {
    backgroundColor: '#2070B4',
  },
  btnModalVoltar: {
    backgroundColor: 'grey',
  },
  modalBody: {
    height: 510,
    padding: 10,
  },
  titulo: {
    width: '80%',
    alignItems: 'center',
  },
});
