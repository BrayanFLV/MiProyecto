import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, ImageBackground,TouchableOpacity, TextInput} from 'react-native'

class GamerFet extends Component {

  

  login(){
    Alert.alert('producto agregado Correctamente')
  }

  render(){

    return(
      <ImageBackground source={require('../assets/fondo8.jpg')} style={styles.container}>
        <View style={styles.header}>
          
        </View>
        
        <View style={styles.body}>
        <Image source={require('../assets/logo.png')} 
              style={styles.logo}></Image>
          <TouchableOpacity>
          <Text style={styles.textColor} onPress={this.login}>
          AGREGAR PRODUCTOS</Text>
          <TextInput placeholder="NOMBRE*" placeholderTextColor="white"
          maxLength={8} style={{borderWidth: 1, borderColor:'white', padding:5,marginTop:16}}></TextInput>
           <TextInput placeholder="PRECIO*" placeholderTextColor="white"
            maxLength={8} style={{borderWidth: 1, borderColor:'white', padding:5,marginTop:16}}></TextInput>
            <TextInput placeholder="RUTA DE IMAGEN*" placeholderTextColor="white"
          maxLength={8} style={{borderWidth: 1, borderColor:'white', padding:5,marginTop:16}}></TextInput>
          <View style={styles.headerRight}>
              <Button title="Agregar" color="red" onPress={this.login}></Button>
          </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
          <Image source={require('../assets/logo4.png')} 
              style={styles.logo1}></Image>
          </View>
          <View style={[styles.flex, styles.footerCenter]}>
          <Image source={require('../assets/logo1.png')} 
              style={styles.logo1}></Image>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
              <Image source={require('../assets/logo3.jpg')} 
              style={styles.logo1}></Image>
          </View>
        </View>




      </ImageBackground>
    )

  }

}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    backgroundColor : 'green'
  },
 
  body : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
    
  },

  logo1 : {
    width : 100,
    height : 100,
    resizeMode : 'contain',
    borderRadius : 30
  },

  logo : {
    marginTop:100,
    width : 200,
    height : 200,
    resizeMode : 'contain',
    borderRadius : 30
  },

  footer : {
    flex : 1,
    flexDirection : 'row'
  },
  flex : {
    flex : 1
  },
  footerLeft : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  footerCenter : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  footerRight : {
    alignItems : 'flex-end',
    justifyContent : 'center'
  },
  textColor : {
    color : 'white'
  }
})

export default GamerFet