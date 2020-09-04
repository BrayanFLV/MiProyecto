import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, ImageBackground,TouchableOpacity, TextInput} from 'react-native'

class HolaCiapfa extends Component {

    accion = () => {
        this.props.navigation.navigate('accion')
    }

    aventura = () => {
        this.props.navigation.navigate('aventura')
    }

    deportes = () => {
        this.props.navigation.navigate('deportes')
    }

  render(){

    return(
        <ImageBackground source={require('../assets/fondo3.jpg')} style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
              <Image source={require('../assets/logo.png')} 
              style={styles.logo}></Image>
          </View>
          
        </View>
        
        <View style={styles.body}>
          <Text style={styles.textColor} onPress={this.login}>
          JUEGOS DE ACCION</Text>
          <Image source={require('../assets/acc.jpg')} 
              style={styles.logo2}></Image>
              <Button title="ver mas" color="blueviolet" onPress={this.accion}></Button>
        </View>

        <View style={styles.body2}>
          <Text style={styles.textColor} onPress={this.login}>
          JUEGOS DE AVENTURA</Text>
          <Image source={require('../assets/ave.jpg')} 
              style={styles.logo2}></Image>
              <Button title="ver mas" color="blueviolet" onPress={this.aventura}></Button>
          
        </View>

        <View style={styles.body3}>
          <Text style={styles.textColor} onPress={this.login}>
          JUEGOS DE DEPORTES</Text>
          <Image source={require('../assets/depo.jpg')} 
              style={styles.logo2}></Image>
              <Button title="ver mas" color="blueviolet" onPress={this.deportes}></Button>
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
    justifyContent : 'center',
    alignItems : 'center'
  
  },
  
  body : {
    marginTop: 40,
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },

  body2 : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },

  body3 : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },


  logo : {
    width : 200,
    height : 200,
    resizeMode : 'contain',
    borderRadius : 30
  },

  logo1 : {
    width : 100,
    height : 100,
    resizeMode : 'contain',
    borderRadius : 30
  },

  logo2 : {
    marginTop: 0, 
    width : 200,
    height : 150,
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