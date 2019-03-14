import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Tile, List, ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Compozitia extends Component {
  render() {
    const { item, value } = this.props.navigation.state.params;
    let content1;
    let content2;
    let content3;
    let content4;
    let content5;
    let content6;
    if (value === 'Citesc!') {
      content6 = item.evanghelia1;
      content1 = item.evanghelia2;
    } else if (value === 'Reflectez!') {
      content1 = item.meditatia1;
      content2 = item.meditatia2;
      content3 = item.meditatia3;
      content4 = item.meditatia4;
      content5 = item.meditatia5;
    } else if (value === 'Mă rog!') {
      content1 = item.rugaciune;
    } else if (value === 'Practic!') {
      content6 = item.indemn1;
      content1 = item.indemn2;
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
          <Text style={{ fontSize: 20, textAlign: 'justify' }}>
            {content6 && (
              <Text>
                {'\t'}
                {content6}
              </Text>
            )}
          </Text>

          <Text
            style={{ fontSize: 16, marginBottom: 16, textAlign: 'justify' }}
          >
            {'\t'}
            {content1}
          </Text>
          <Text
            style={{ fontSize: 16, marginBottom: 16, textAlign: 'justify' }}
          >
            {'\t'}
            {content2}
          </Text>
          <Text
            style={{ fontSize: 16, marginBottom: 16, textAlign: 'justify' }}
          >
            {'\t'}
            {content3}
          </Text>
          <Text
            style={{ fontSize: 16, marginBottom: 16, textAlign: 'justify' }}
          >
            {'\t'}
            {content4}
          </Text>
          <Text
            style={{ fontSize: 16, marginBottom: 16, textAlign: 'justify' }}
          >
            {'\t'}
            {content5}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Compozitia;
