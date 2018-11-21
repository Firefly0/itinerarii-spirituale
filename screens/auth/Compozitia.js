import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Tile, List, ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Compozitia extends Component {
  render() {
    const { item, value } = this.props.navigation.state.params;
    let content;
    let content2;
    if (value === 'Citesc!') {
      content2 = item.evanghelia2;
      content = item.evanghelia;
    } else if (value === 'Reflectez!') {
      content = item.meditatia;
    } else if (value === 'Mă rog!') {
      content = item.rugaciune;
    } else if (value === 'Practic!') {
      content = item.indemn;
    }
    return (
      <ScrollView style={{ backgroundColor: 'azure' }}>
        <View
          style={{
            marginTop: 14,
            marginRight: 12,
            marginLeft: 12
          }}
        >
          <Text style={{ fontSize: 16 }}>
            {' '}
            <Text style={{ fontSize: 20 }}>{content2}</Text>
            {'\n'}
            {content}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Compozitia;
