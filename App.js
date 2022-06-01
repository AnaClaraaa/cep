import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
	const [cep, setCep] = useState(0);
	const [inputCep, setInputCep] = useState(0);
	
	async function carregaCep(){
	const response = await Api.get('ws/' +inputCep+ '/json/');
	setCep(response.data);
	}

  return(
    <View style={styles.container}>
		  
	  <View style={styles.bloco}>
		<Text style={styles.texto}>Informe seu CEP</Text>
		<TextInput
			  style={styles.input}
			  placeholder="Ex. : 11740000"
			  onChangeText={(data) => setInputCep(data)}
		/>
			
		<TouchableOpacity 
			style={styles.botao}
			onPress = {carregaCep}
			>
			<Text style={styles.textoBotao}>Buscar</Text>
		</TouchableOpacity>
		  
		</View>
		<Cep data = {cep}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
	bloco:{
		width: '100%',
		alignItems: 'center',
    	justifyContent: 'center'
	},
	input:{
		width: '80%',
		marginLeft: '10%',
		borderBottomWidth: 1,
		FontSize: 20
	},
	texto:{
		fontSize: 20,
		textAling: 'center'
	},
	botao:{
		width: '80%',
		marginLeft:'10',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textoBotao:{
		fontSize: 20,
		alignItems: 'center',
    	justifyContent: 'center'
	}
});