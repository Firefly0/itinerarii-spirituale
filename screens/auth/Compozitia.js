import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Tile, List, ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Compozitia extends Component {
  render() {
    const { item, value } = this.props.navigation.state.params;
    let content;
    if (value === 'evanghelia') {
      content = item.evanghelia;
    } else if (value === 'meditatie') {
      content = item.meditatia;
    } else if (value === 'rugaciune') {
      content = item.rugaciune;
    } else if (value === 'gand') {
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
          <Text> {content}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Compozitia;
