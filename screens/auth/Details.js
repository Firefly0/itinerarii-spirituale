import React, { Component } from 'react';
import { ScrollView, View, Image, TouchableHighlight } from 'react-native';
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
    const evangheliaImage = (
      <TouchableHighlight
        onPress={() => onLearnMore(item, (value = 'evanghelia'))}
      >
        <Image
          style={{
            width: styleIcon,
            height: styleIcon,
            tintColor: item.color || '#123456'
          }}
          source={require('../../assets/images/holy-bible-xxl.png')}
        />
      </TouchableHighlight>
    );
    const meditatiaImage = (
      <TouchableHighlight
        onPress={() => onLearnMore(item, (value = 'meditaţie'))}
      >
        <Image
          style={{
            width: styleIcon,
            height: styleIcon,
            tintColor: item.color || '#123456'
          }}
          source={require('../../assets/images/idea.png')}
        />
      </TouchableHighlight>
    );
    const rugaciuneImage = (
      <TouchableHighlight
        onPress={() => onLearnMore(item, (value = 'rugăciune'))}
      >
        <Image
          style={{
            width: styleIcon,
            height: styleIcon,
            tintColor: item.color || '#123456'
          }}
          source={require('../../assets/images/praying.png')}
        />
      </TouchableHighlight>
    );
    const îndemnImage = (
      <TouchableHighlight onPress={() => onLearnMore(item, (value = 'îndemn'))}>
        <Image
          style={{
            width: styleIcon,
            height: styleIcon,
            tintColor: item.color || '#123456'
          }}
          source={require('../../assets/images/running.png')}
        />
      </TouchableHighlight>
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
              marginTop: 10,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}
          >
            <View style={{ width: styleIcon, height: styleIcon }}>
              {evangheliaImage}
            </View>
            <View style={{ width: styleIcon, height: styleIcon }}>
              {meditatiaImage}
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}
          >
            <View style={{ width: styleIcon, height: styleIcon }}>
              {îndemnImage}
            </View>
            <View style={{ width: styleIcon, height: styleIcon }}>
              {rugaciuneImage}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Details;
