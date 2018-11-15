import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../../imgs/detalhe_contato.png')

export default class CenaContatos extends Component {
  render() {
    return (
    	<View style={{ flex: 1, backgroundColor: '#FFF' }}>
	        <StatusBar
	          backgroundColor='#61BD8C'
	        />

        	<BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C' /> 
        	<View style={styles.cabecalho}>
        		<Image source={detalheContatos} />
        		<Text style={styles.txtTitulo}>Contatos</Text>
        	</View>
        	
        	<View style={styles.detalheContatos}>
        		<Text style={styles.txtContatos}>TEL: (21) 3082-7462</Text>
            <Text style={styles.txtContatos}>CEL: (21) 98894-1978</Text>
            <Text style={styles.txtContatos}>EMAIL: contato@atmconsultoria.com</Text>
        	</View>        	
      </View>
    );
  }
}

const styles = StyleSheet.create({
	cabecalho: {
		flexDirection: 'row',
		marginTop: 20
	},
	txtTitulo: {
		fontSize: 30,
		color: '#61BD8C',
		marginLeft: 10,
		marginTop: 25
	},
	detalheContatos: {
		padding: 20,
		marginTop: 20
	},
	txtContatos: {
		fontSize: 18		
	}
});
