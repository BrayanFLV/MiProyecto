import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, ImageBackground,TouchableOpacity, TextInput} from 'react-native'

class GamerFet extends Component {

  

    registro = () => {
        this.props.navigation.navigate('registro')
    }

    categorias = () => {
        this.props.navigation.navigate('categorias')
    }

    admin = () => {
        this.props.navigation.navigate('admin')
    }

    

  render(){

    return(
      <ImageBackground source={require('../assets/fondo.jpg')} style={styles.container}>
        <View style={styles.header}>
          
        </View>
        
        <View style={styles.body}>
        <Image source={require('../assets/logo.png')} 
              style={styles.logo}></Image>
          <TouchableOpacity>
          <Text style={styles.textColor} onPress={this.login}>
          BIENVENIDOS A GAMER FET</Text>
          <TextInput placeholder="Nombre de usuario" placeholderTextColor="white"
          maxLength={8} style={{borderWidth: 1, borderColor:'white', padding:5,marginTop:16}}></TextInput>
           <TextInput placeholder="Contraseña de usuario" placeholderTextColor="white"
          maxLength={8} style={{borderWidth: 1, borderColor:'white', padding:5,marginTop:16}}></TextInput>

        <View style={styles.headerRight}>
              <Button title="registrarse" color="red" onPress={this.registro}></Button>
          </View>
          <View style={styles.headerRight}>
              <Button title="entrar" color="blue" onPress={this.categorias}></Button>
          </View>
          <View style={styles.headerRight}>
              <Button title="ADMIN" color="#800000" onPress={this.admin}></Button>
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
  header : {
    flex : 0.5,
    flexDirection : 'row',
    marginTop : 30
  },
  headerLeft : {
    flex : 1,
  },
  headerRight : {
    flex: 0.3,
    marginRight : 10    
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