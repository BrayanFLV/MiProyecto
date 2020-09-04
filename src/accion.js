import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, ImageBackground,TouchableOpacity, TextInput} from 'react-native'

class HolaCiapfa extends Component {

  login(){
    Alert.alert('Login de usuario')
  }

  render(){

    return(
        <ImageBackground source={require('../assets/fondo5.jpg')} style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
          <Text style={styles.textColor} onPress={this.login}>
          JUEGOS DE ACCION</Text>
              <Image source={require('../assets/acc2.jpg')} 
              style={styles.logo}></Image>

<Text style={styles.textColor} onPress={this.login}>
          PRODUCTOS</Text>
              
          </View>
          
        </View>
        
        <View style={styles.productos}>
          <View style={[styles.flex, styles.productosLeft]}>
          <Text style={styles.textColor} onPress={this.login}>
          CALL OF DUTY </Text>
          <Image source={require('../assets/call.jpg')} 
              style={styles.logo1}></Image>
              <Button title="Comprar" color="blueviolet" onPress={this.categorias}></Button>
          </View>
          
          <View style={[styles.flex, styles.productosCenter]}>
          <Text style={styles.textColor} onPress={this.login}>
          CALL OF DUTY </Text>
          <Image source={require('../assets/call.jpg')} 
              style={styles.logo1}></Image>
              <Button title="Comprar" color="blueviolet" onPress={this.categorias}></Button>
          </View>

          <View style={[styles.flex, styles.productosRight]}>
          <Text style={styles.textColor} onPress={this.login}>
          CALL OF DUTY </Text>
          <Image source={require('../assets/call.jpg')} 
              style={styles.logo1}></Image>
              <Button title="Comprar" color="blueviolet" onPress={this.categorias}></Button>
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
    flex : 0,
    flexDirection : 'row',
    marginTop : 30
  },
  headerLeft : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  
  },
  
 

  logo : {
    width : 30000,
    height : 320,
    resizeMode : 'contain',
   
  },

  logo1 : {
    width : 180,
    height : 200,
    resizeMode : 'contain',
    borderRadius : 30
   
  },

  logo2 : {
    marginTop: 0, 
    width : 100,
    height : 100,
    resizeMode : 'contain',
    borderRadius : 30
  },


  productos : {
    flex : 0.6,
    flexDirection : 'row'
  },
  flex : {
    flex : 1
  },
  productosLeft : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  productosCenter : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  productosRight : {
    alignItems : 'center',
    justifyContent : 'center'
  },

 

  textColor : {
    color : 'white'
  }
})

export default HolaCiapfa