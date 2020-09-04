import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, ImageBackground} from 'react-native'

class HolaCiapfa extends Component {

    agregarPro = () => {
        this.props.navigation.navigate('agregarPro')
    }

  render(){

    return(
        <ImageBackground source={require('../assets/fondo8.jpg')} style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
              <Image source={require('../assets/logo.png')} 
              style={styles.logo}></Image>
          </View>
          <View style={styles.headerRight}>
              <Button title="AGREGAR PRODUCTO" color="red" onPress={this.agregarPro} ></Button>
          </View>
        </View>
        
        <View style={styles.body}>
          <Text style={styles.textColor} onPress={this.login}>
          NOMBRE</Text>
          <Image source={require('../assets/call.jpg')} 
              style={styles.logo1}></Image>
              <Text style={styles.textColor} onPress={this.login}>
          $50000</Text>
              <Button title="MODIFICAR" color="green" onPress={this.categorias}></Button>
              <Button title="ELIMINAR" color="red" onPress={this.categorias}></Button>
          
        </View>

        <View style={styles.body}>
          <Text style={styles.textColor} onPress={this.login}>
          NOMBRE</Text>
          <Image source={require('../assets/call.jpg')} 
              style={styles.logo1}></Image>
              <Text style={styles.textColor} onPress={this.login}>
          $50000</Text>
              <Button title="MODIFICAR" color="green" onPress={this.categorias}></Button>
              <Button title="ELIMINAR" color="red" onPress={this.categorias}></Button>
          
        </View>
        

        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
              <Text style={styles.textColor}>GAMER FET</Text>
          </View>
          <View style={[styles.flex, styles.footerCenter]}>
              <Text style={styles.textColor}>ADMINISTRADOR</Text>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
              <Image source={require('../assets/logo.png')} 
              style={styles.logo}></Image>
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
  logo : {
    width : 300,
    height : 100,
    resizeMode : 'contain',
    borderRadius : 30
    
  },

  logo1 : {
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