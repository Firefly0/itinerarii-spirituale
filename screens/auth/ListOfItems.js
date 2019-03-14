import React, { Component } from 'react';
import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, AsyncStorage, AppState } from 'react-native';

class ListOfItems extends Component {
  onLearnMore = item => {
    this.props.navigation.navigate('Details', { item });
  };

  goToIntroducere = introducere => {
    this.props.navigation.navigate('Introducere', { introducere });
  };

  render() {
    const { imGood, introducere, final } = this.props.navigation.state.params;
    const imGoodResult = imGood.filter(item => item.publicare);
    imGoodResult.sort(function(a, b) {
      return b.id - a.id;
    });

    return (
      <ScrollView>
        <List containerStyle={{ marginTop: 0 }}>
          {/* {final && final.publicat && (
            <ListItem
              roundAvatar
              avatar={{ uri: final.linkPhoto }}
              onPress={() => this.goToIntroducere(final)}
              title={
                <Text
                  style={{
                    color: 'white',
                    paddingLeft: 10
                  }}
                >
                  {final.title}
                </Text>
              }
              containerStyle={{
                backgroundColor: '#310C37'
              }}
            />
          )} */}

          {imGoodResult.map((item, index) => (
            <ListItem
              key={index}
              containerStyle={{
                backgroundColor: item.color || 'green'
              }}
              roundAvatar
              avatar={{ uri: item.linkPhoto }}
              title={
                <Text style={{ color: 'white', paddingLeft: 10 }}>
                  {item.title}
                </Text>
              }
              subtitle={
                <Text style={{ color: 'white', paddingLeft: 10 }}>
                  {item.TitluCeAparePePoza}
                </Text>
              }
              onPress={() => this.onLearnMore(item)}
            />
          ))}
          {introducere && (
            <ListItem
              roundAvatar
              avatar={{ uri: introducere.linkPhoto }}
              onPress={() => this.goToIntroducere(introducere)}
              title={
                <Text
                  style={{
                    color: 'white',
                    paddingLeft: 10
                  }}
                >
                  {introducere.title}
                </Text>
              }
              containerStyle={{
                backgroundColor: '#310C37'
              }}
            />
          )}
        </List>
      </ScrollView>
    );
  }
}
export default ListOfItems;
