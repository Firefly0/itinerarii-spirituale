import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TestComponent} from '../components/AppComponents'

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'azure', flex: 1}}>
        <Text>Hello Raluca</Text>
        <Text>Let's the fun begin</Text>
      </View>
    );
  }
}