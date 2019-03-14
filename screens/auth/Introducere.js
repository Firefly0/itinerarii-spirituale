import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Tile } from 'react-native-elements';

class Introducere extends Component {
  render() {
    const { introducere } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Tile
            imageSrc={{ uri: introducere.linkPhoto }}
            featured
            title={
              <Text style={{ fontSize: 20 }}>
                <Text style={{ fontSize: 28 }}>
                  {introducere.TitluCeAparePePoza}
                </Text>
                {'\n'}
                {introducere.autor}
              </Text>
            }
          />
        </View>
        <View style={{ marginTop: 14, marginRight: 12, marginLeft: 12 }}>
          <Text style={{ fontSize: 16, textAlign: 'justify' }}>
            {'\t'}
            {introducere.introducere}
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'justify' }}>
            {'\t'}
            {introducere.introducere1}
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'justify' }}>
            {'\t'}
            {introducere.introducere2}
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'justify' }}>
            {'\t'}
            {introducere.introducere3}
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'justify' }}>
            {'\t'}
            {introducere.introducere4}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Introducere;
