import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import loguin from './src/loguin';
import reg from './src/registro';
import cat from './src/categorias';
import accion from './src/accion';
import aventura from './src/aventura';
import deportes from './src/deportes';
import admin from './src/admin';
import agregarPro from './src/agregarPro';

const InicioNavigator = createStackNavigator({

  Login: {
    screen:loguin,
  },
  registro: {
    screen:reg,
  },

  categorias: {
    screen:cat,
  },

  accion: {
    screen:accion,
  },

  aventura: {
    screen:aventura,
  },

  deportes: {
    screen:deportes,
  },

  admin: {
    screen:admin,
  },

  agregarPro: {
    screen:agregarPro,
  },

 
});

export default createAppContainer(InicioNavigator);