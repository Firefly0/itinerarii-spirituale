import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { users } from '../../constants/data';

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
          console.log('1');
          console.log(doc.id, ' =>.. ', doc.data());
          let data = doc.data();
          console.log('data', data);
          console.log('auth', doc.data().Autori);
          let news = {
            autori: doc.data().Autori,
            evanghelia: doc.data().Evanghelia,
            id: doc.data().title,
            linkPhoto: doc.data().LinkPhoto
          };
          arrayM.push(news);
        });
        console.log('ar', arrayM);
        this.setState({ imGood: arrayM }, () => {
          console.log(this.state);
        });
      });
  };
  componentDidMount() {
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
        <List containerStyle={{ backgroundColor: 'green' }}>
          {imGood.map(item => (
            <ListItem
              key={item.autori}
              roundAvatar
              avatar={{ uri: item.linkPhoto }}
              title={item.autori}
              subtitle={item.autori}
              onPress={() => this.onLearnMore(item)}
            />
          ))}
        </List>
        <Button onPress={() => this.callFirestore()}>Something</Button>
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
