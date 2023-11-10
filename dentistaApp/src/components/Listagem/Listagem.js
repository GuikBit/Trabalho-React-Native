// import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
// import React, { useState } from 'react';
// import {
//   Searchbar,
//   TextInput,
//   Button,
//   PaperProvider,
//   Portal,
//   Modal,
//   Checkbox,
//   FAB,
// } from 'react-native-paper';
// import globalStyle from '../../../globalStyle';
// import CardConsulta from '../Cards/CardConsulta';
// import ModalDentista from '../Modal/ModalDentista';
// import CardPaciente from '../Cards/CardPaciente';
// import ModalEspec from '../Modal/ModalEspec';
// import listaEspe from '../../Mock/listaEspe';
// import listaDentista from '../../Mock/listaDentista';
// import { useGetPacientesAuth } from '../../service/Queries';
// import HeaderGeral from './HeaderGeral';
// import FiltroConsultas from './FiltroConsultas';
// import FiltroPacientes from './FiltroPacientes';
// import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';

// const Lista = ({ navigation, titulo, lista }) => {
//   const { data, isLoading } = useGetPacientesAuth();

//   const [filtro, setFiltro] = useState([]);
//   const [pesquisa, setPesquisa] = useState('');
//   const [dataInicio, setDataInicio] = useState(null);
//   const [dataFim, setDataFim] = useState(null);
//   const [dentista, setDentista] = useState(null);
//   const [espec, setEspec] = useState(null);

//   const [modalDent, setModalDent] = useState(false);
//   const [modalEspec, setModalEspec] = useState(false);

//   const showDentis = () => setModalDent(true);
//   const hideDentis = () => setModalDent(false);

//   const showEspec = () => setModalEspec(true);
//   const hideEspec = () => setModalEspec(false);

//   const styleModalDent = {
//     backgroundColor: '#FFFFFF',
//     marginHorizontal: 10,
//     padding: 10,
//     borderRadius: 15,
//     height: 450,
//     justifyContent: '',
//   };

//   const styleModalEspec = {
//     backgroundColor: '#FFFFFF',
//     marginHorizontal: 10,
//     padding: 20,
//     borderRadius: 15,
//     height: 350,
//     justifyContent: '',
//   };
//   const cor = '#2070B4';

//   function buscaUsuario(e) {
//     setPesquisa(e);

//     if (e === '') {
//       setFiltro(lista);
//     } else {
//       const pesquisaLowerCase = e.toLowerCase();
//       const filtro = lista.filter((user) => {
//         const nomeLowerCase = user.nome.toLowerCase();
//         const pastaNuString = user.pastaNu.toString();
//         return (
//           nomeLowerCase.includes(pesquisaLowerCase) ||
//           pastaNuString.includes(pesquisaLowerCase)
//         );
//       });
//       setFiltro(filtro);
//     }
//   }

//   function findByAcao(id) {
//     if (titulo == 'Consultas') {
//       navigation.navigate('Consulta', {
//         id: id,
//       });
//     } else if (titulo == 'Pacientes') {
//       navigation.navigate('Paciente', {
//         id: id,
//       });
//     } else {
//       navigation.navigate('Dentista', {
//         id: id,
//       });
//     }
//   }

//   function findByNovo() {
//     if (titulo == 'Consultas') {
//       navigation.navigate('Nova Consulta');
//     } else if (titulo == 'Pacientes') {
//       navigation.navigate('Cadastro', { interno: true });
//     } else {
//       navigation.navigate('Novo Dentista');
//     }
//   }

//   if (isLoading) {
//     return <LoadingOverlay />;
//   }
//   return (
//     <PaperProvider>
//       <View style={globalStyle.container}>
//         <View style={globalStyle.headerPesq}>
//           <HeaderGeral titulo={titulo} />
//           {titulo == 'Consultas' ? (
//             <>
//               <FiltroConsultas
//                 setDataFim={setDataFim}
//                 setDataInicio={setDataInicio}
//                 setFiltro={setFiltro}
//                 showDentis={showDentis}
//                 showEspec={showEspec}
//                 buscaUsuario={buscaUsuario}
//                 dataFim={dataFim}
//                 dataInicio={dataInicio}
//                 pesquisa={pesquisa}
//               />
//             </>
//           ) : (
//             <FiltroPacientes
//               pesquisa={pesquisa}
//               buscaUsuario={buscaUsuario}
//               setFiltro={setFiltro}
//             />
//           )}
//         </View>
//         {isLoading ? (
//           <LoadingOverlay />
//         ) : (
//           <FlatList
//             style={globalStyle.flatList}
//             data={filtro.length == 0 ? data : filtro}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <>
//                 {titulo == 'Consultas' ? (
//                   <CardConsulta
//                     consulta={item}
//                     onPress={() => {
//                       navigation.navigate('Consulta Details', { id: item.id });
//                     }}
//                   />
//                 ) : (
//                   <CardPaciente
//                     usuario={item}
//                     onPress={() => {
//                       titulo == 'Pacientes'
//                         ? navigation.navigate('Paciente', { id: item.id })
//                         : navigation.navigate('Dentista', { id: item.id });
//                     }}
//                   />
//                 )}
//               </>
//             )}
//           />
//         )}

//         <FAB
//           icon="plus"
//           style={styles.fab}
//           onPress={findByNovo}
//           color="#FFFFFF"
//         />
//       </View>

//       <Modal visible={modalDent} contentContainerStyle={styleModalDent}>
//         <Searchbar
//           style={styles.searchModal}
//           placeholder="Pesquisar Dentista"
//           value={pesquisa}
//           onClearIconPress={() => setFiltro(lista)}
//           onChangeText={(e) => buscaUsuario(e)}
//         />
//         <View style={styles.modalBodyDentista}>
//           <FlatList
//             data={listaDentista}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => <ModalDentista dentista={item} />}
//           />
//         </View>
//         <View style={[globalStyle.rowBetween, styles.acao]}>
//           <Button
//             onPress={hideDentis}
//             style={styles.btnModalVoltar}
//             textColor="#FFFFFF"
//             icon="arrow-left-bold"
//           >
//             Voltar
//           </Button>
//           <Button
//             onPress={hideDentis}
//             style={styles.btnModalbtnSelecionar}
//             textColor="#FFFFFF"
//             icon="check"
//           >
//             Selecionar
//           </Button>
//         </View>
//       </Modal>

//       <Modal visible={modalEspec} contentContainerStyle={styleModalEspec}>
//         <Searchbar
//           style={styles.searchModal}
//           placeholder="Pesquisar Especialidade"
//           value={pesquisa}
//           onClearIconPress={() => setFiltro(lista)}
//           onChangeText={(e) => buscaUsuario(e)}
//           iconColor="#2070B4"
//           rippleColor="#2070B4"
//         />

//         <View style={styles.modalBodyEspec}>
//           <FlatList
//             data={listaEspe}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => <ModalEspec espec={item} />}
//           />
//         </View>
//         <View style={[globalStyle.rowBetween, styles.acao]}>
//           <Button
//             onPress={hideEspec}
//             style={styles.btnModalVoltar}
//             textColor="#FFFFFF"
//             icon="arrow-left-bold"
//           >
//             Voltar
//           </Button>
//           <Button
//             onPress={hideEspec}
//             style={styles.btnModalbtnSelecionar}
//             textColor="#FFFFFF"
//             icon="check"
//           >
//             Selecionar
//           </Button>
//         </View>
//       </Modal>
//     </PaperProvider>
//   );
// };

// export default Lista;

// const styles = StyleSheet.create({
//   search: {
//     marginHorizontal: 5,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 0.5,
//     borderColor: '#2070B4',
//     marginTop: 15,
//   },
//   searchModal: {
//     marginHorizontal: 5,
//     backgroundColor: '#cfe7fc',
//   },
//   menu: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   inputConsulta: {
//     width: 150,
//     fontSize: 18,
//     height: 40,
//   },
//   acao: {},
//   modalBodyDentista: {
//     height: 340,
//     padding: 10,
//   },
//   modalBodyEspec: {
//     height: 225,
//     padding: 10,
//   },
//   modalTexto: {
//     fontSize: 22,
//     marginHorizontal: 25,
//     marginTop: 5,
//   },
//   btnModalbtnSelecionar: {
//     backgroundColor: '#2070B4',
//   },
//   btnModalVoltar: {
//     backgroundColor: 'grey',
//   },
//   fab: {
//     position: 'absolute',
//     margin: 20,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#2070B4',
//     color: '#FFFFFF',
//   },
// });
