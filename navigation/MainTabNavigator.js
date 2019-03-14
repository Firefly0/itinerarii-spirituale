import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Main from '../screens/auth/Main';
import Details from '../screens/auth/Details';
import Compozitia from '../screens/auth/Compozitia';
import Introducere from '../screens/auth/Introducere';
import ListOfItems from '../screens/auth/ListOfItems';

export default (Acasa = createStackNavigator({
  Main: {
    screen: Main,
    tabBarVisible: false,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#073F50',
        shadowColor: 'white',
        elevation: 0,
        marginTop: -10,
        height: 40
      },
      tabBarLabel: 'Home',
      title: 'Itinerarii spirituale',
      ...Platform.select({
        android: {
          headerTitleStyle: {
            textAlign: 'center',
            flex: 1
          }
        }
      }),
      headerLayoutPreset: 'center',
      headerTintColor: 'white'
    })
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
      title: `${navigation.state.params.item.title}`,
      ...Platform.select({
        android: {
          headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            marginLeft: -30
          }
        }
      }),
      headerTintColor: 'white',
      headerLayoutPreset: 'center',
      headerStyle: {
        backgroundColor: '#073F50',
        shadowColor: 'white',
        elevation: 0,
        marginTop: -10,
        height: 40,
        textAlign: 'center'
      }
    })
  },
  Compozitia: {
    screen: Compozitia,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.value.toUpperCase()}`,
      ...Platform.select({
        android: {
          headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            marginLeft: -30
          }
        }
      }),
      headerTintColor: 'white',
      headerLayoutPreset: 'center',
      headerStyle: {
        backgroundColor: '#073F50',
        shadowColor: 'white',
        elevation: 0,
        marginTop: -10,
        height: 40,
        textAlign: 'center'
      }
    })
  },
  Introducere: {
    screen: Introducere,
    navigationOptions: ({ navigation }) => ({
      title: `Introducere`,
      ...Platform.select({
        android: {
          headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            marginLeft: -30
          }
        }
      }),
      headerTintColor: 'white',
      headerLayoutPreset: 'center',
      headerStyle: {
        backgroundColor: '#073F50',
        shadowColor: 'white',
        elevation: 0,
        marginTop: -10,
        height: 40,
        textAlign: 'center'
      }
    })
  },
  ListOfItems: {
    screen: ListOfItems,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.value.toUpperCase()}`,
      ...Platform.select({
        android: {
          headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            marginLeft: -30
          }
        }
      }),
      headerTintColor: 'white',
      headerLayoutPreset: 'center',
      headerStyle: {
        backgroundColor: '#073F50',
        shadowColor: 'white',
        elevation: 0,
        marginTop: -10,
        height: 40,
        textAlign: 'center'
      }
    })
  }
}));
