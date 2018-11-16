import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { users } from '../../constants/data';
import { AsyncStorage } from 'react-native';

import ApiKeys from '../../constants/ApiKeys';
import * as firebase from 'firebase';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      docs: [],
      imGood: []
    };

    //Initialize firebase
    if (firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }
  lfunction = data => {
    this.setState({ data: data });
  };
  callFirestore = () => {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection('Advent')
      .get()
      .then(querySnapshot => {
        let arrayM = [];
        querySnapshot.forEach(function(doc) {
          let data = doc.data();
          let news = {
            autori: doc.data().Autori,
            evanghelia: doc.data().Evanghelia,
            id: doc.data().title,
            linkPhoto: doc.data().LinkPhoto,
            color: doc.data().color,
            meditatia: doc.data().Meditatia,
            rugaciune: doc.data().Rugaciune,
            indemn: doc.data().Indemn
          };
          arrayM.push(news);
        });
        this.setState({ imGood: arrayM }, () => {
          console.log('here');
          console.log('first async');
          try {
            AsyncStorage.setItem('arrayM', JSON.stringify(arrayM));
            console.log('set it');
          } catch (error) {
            // Error retrieving data
            console.log('error.message');
          }
        });
      });
  };
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('arrayM');
      if (value !== null) {
        this.setState({ imGood: JSON.parse(value) }, () => {
          console.log('newState', this.state);
        });
      } else {
        console.log('no data found');
      }
    } catch (error) {
      console.log('retrive data -- no data');
      // Error retrieving data
    }
  };
  componentDidMount() {
    this.retrieveData();
    this.callFirestore();
  }

  onLearnMore = item => {
    this.props.navigation.navigate('Details', { item });
  };

  render() {
    const { imGood } = this.state;
    console.log('state', this.state);
    return (
      <ScrollView>
        <List>
          {imGood.map(item => (
            <ListItem
              key={item.autori}
              containerStyle={{ backgroundColor: item.color || 'green' }}
              roundAvatar
              avatar={{ uri: item.linkPhoto }}
              title={item.id}
              subtitle={item.autori}
              onPress={() => this.onLearnMore(item)}
            />
          ))}
        </List>
        <Button onPress={() => this.callFirestore()} title={'Reload Data'}>
          Something
        </Button>
        {/* {this.state.docs.length && (
          <View>
            <Text>some</Text>
          </View>
        )} */}
        {/* <Text>{this.state.docs.length && .Autori}</Text> */}
      </ScrollView>
    );
  }
}

export default Main;
