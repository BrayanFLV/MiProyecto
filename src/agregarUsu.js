import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native'

class HolaCiapfa extends Component {

  login(){
    Alert.alert('Login de usuario')
  }

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
              <Image source={require('../assets/logo.png')} 
              style={styles.logo}></Image>
          </View>
          <View style={styles.headerRight}>
              <Button title="Login" color="blue" onPress={this.login}></Button>
          </View>
        </View>
        
        <View style={styles.body}>
          <Text style={styles.textColor} onPress={this.login}>
          BIENVENIDO A MI PRIMERA APP MÓVIL</Text>
        </View>
        

        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
              <Text style={styles.textColor}>CIAPFA</Text>
          </View>
          <View style={[styles.flex, styles.footerCenter]}>
              <Text style={styles.textColor}>HOLA CIAPFA</Text>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
              <Image source={require('./assets/logo.png')} 
              style={styles.logo}></Image>
          </View>
        </View>


      </View>
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
  logo : {
    width : 100,
    height : 60,
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

export default HolaCiapfa