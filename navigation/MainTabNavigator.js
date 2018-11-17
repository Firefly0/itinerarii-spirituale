import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TestScreen from '../screens/TestScreen';
import Main from '../screens/auth/Main';
import Details from '../screens/auth/Details';
import Compozitia from '../screens/auth/Compozitia';

const HomeStack = createStackNavigator({
  Home: TestScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  title: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

const Acasa = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#073F50',
        shadowColor: 'white',
        elevation: 0,
        marginTop: -10,
        height: 40
      },
      tabBarLabel: 'Home',
      title: 'O ancora pentru inima mea',
      headerTintColor: 'white',
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={35} color={tintColor} />
      )
    }
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.item.id}`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#073F50',
        shadowColor: 'white',
        elevation: 0,
        marginTop: -10,
        height: 40
      }
    })
  },
  Compozitia: {
    screen: Compozitia,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.value.toUpperCase()}`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#27A9E1',
        shadowColor: 'white',
        elevation: 0,
        marginTop: -10,
        height: 40
      }
    })
  }
});

export default createBottomTabNavigator({
  Acasa
});
