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
    try {
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
    } catch {
      console.log(error);
    }
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
        <List containerStyle={{ marginTop: 0 }}>
          {imGood.map((item, index) => (
            <ListItem
              key={index}
              containerStyle={{
                backgroundColor: item.color || 'green'
              }}
              roundAvatar
              avatar={{ uri: item.linkPhoto }}
              title={
                <Text style={{ color: 'white', paddingLeft: 10 }}>
                  {item.id}
                </Text>
              }
              subtitle={
                <Text style={{ color: 'white', paddingLeft: 10 }}>
                  {item.autori}
                </Text>
              }
              onPress={() => this.onLearnMore(item)}
            />
          ))}
        </List>
        <Button onPress={() => this.callFirestore()} title={'Refresh'} />
      </ScrollView>
    );
  }
}

export default Main;
