import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Tile, List, ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const styleIcon = 100;

class Details extends Component {
  render() {
    const { item } = this.props.navigation.state.params;

    onLearnMore = (item, value) => {
      this.props.navigation.navigate('Compozitia', { item, value });
    };

    onPressEvangh = value => {
      console.log(value);
    };
    const evangheliaIcon = (
      <Icon
        name="wikipedia-w"
        size={100}
        color="#900"
        onPress={() => onLearnMore(item, (value = 'evanghelia'))}
      />
    );
    const meditatiaIcon = (
      <Icon
        name="commenting"
        size={100}
        color="#b4f324"
        onPress={() => onLearnMore(item, (value = 'meditatie'))}
      />
    );
    const rugaciuneIcon = (
      <Icon
        name="arrow-left"
        size={100}
        color="#f12345"
        onPress={() => onLearnMore(item, (value = 'rugaciune'))}
      />
    );
    const gandIcon = (
      <Icon
        name="quote-right"
        size={100}
        color="#654321"
        onPress={() => onLearnMore(item, (value = 'gand'))}
      />
    );
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Tile
            imageSrc={{ uri: item.linkPhoto }}
            featured
            title={item.autori}
          />
        </View>
        <View style={{ margin: 'auto' }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}
          >
            <View style={{ width: styleIcon, height: styleIcon }}>
              {evangheliaIcon}
            </View>
            <View style={{ width: styleIcon, height: styleIcon }}>
              {meditatiaIcon}
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}
          >
            <View style={{ width: styleIcon, height: styleIcon }}>
              {gandIcon}
            </View>
            <View style={{ width: styleIcon, height: styleIcon }}>
              {rugaciuneIcon}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Details;
