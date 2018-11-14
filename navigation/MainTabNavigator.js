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

const MainStack = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#27A9E1',
        shadowColor: 'white',
        elevation: 0,
        marginTop: -10,
        height: 30
      },
      tabBarLabel: 'Home',
      title: 'Itinerar',
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
      headerStyle: {
        backgroundColor: '#27A9E1',
        shadowColor: 'white',
        elevation: 0,
        marginTop: -10,
        height: 30
      }
    })
  }
});

export default createBottomTabNavigator({
  MainStack
});
