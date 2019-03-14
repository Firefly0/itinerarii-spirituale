import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  AsyncStorage,
  AppState,
  ImageBackground
} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { users } from '../../constants/data';

import ApiKeys from '../../constants/ApiKeys';
import * as firebase from 'firebase';
import 'firebase/firestore';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      docs: [],
      imGood: [],
      introducere: {},
      appState: AppState.currentState,
      PostuMareArray: [],
      introducerePostuMare: {},
      incheierePostuMare: {}
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
          let introducere;
          let incheiere;
          querySnapshot.forEach(function(doc) {
            let data = doc.data();
            if (doc.data().introducere) {
              introducere = {
                introducere: doc.data().introducere,
                introducere1: doc.data().introducere1,
                introducere2: doc.data().introducere2,
                introducere3: doc.data().introducere3,
                introducere4: doc.data().introducere4,
                title: doc.data().Title,
                linkPhoto: doc.data().linkphoto,
                TitluCeAparePePoza: doc.data().TitluCeAparePePoza,
                autor: doc.data().autori
              };
            }
            if (doc.data().incheiere) {
              incheiere = {
                incheiere: doc.data().incheiere,
                incheiere1: doc.data().incheiere1,
                incheiere2: doc.data().incheiere2,
                incheiere3: doc.data().incheiere3,
                incheiere4: doc.data().incheiere4,
                title: doc.data().Title,
                linkPhoto: doc.data().linkphoto,
                TitluCeAparePePoza: doc.data().TitluCeAparePePoza,
                autor: doc.data().autori
              };
            }
            let news = {
              autori: doc.data().autori,
              evanghelia1: doc.data().evangheliaBold,
              evanghelia2: doc.data().evanghelia2,
              id: doc.data().id,
              title: doc.data().title,
              TitluCeAparePePoza: doc.data().TitluCeAparePePoza,
              linkPhoto:
                doc.data().linkphoto ||
                'https://media.swncdn.com/cms/CCOM/47839-pray-ceasing.630w.tn.jpg',
              color: doc.data().culoare,
              meditatia1: doc.data().meditatia1,
              meditatia2: doc.data().meditatia2,
              meditatia3: doc.data().meditatia3,
              meditatia4: doc.data().meditatia4,
              meditatia5: doc.data().meditatia5,
              rugaciune: doc.data().rugaciune,
              indemn1: doc.data().indemnBold,
              indemn2: doc.data().indemn2,
              publicare: doc.data().publicare
            };
            arrayM.push(news);
          });
          this.setState({ imGood: arrayM, introducere, incheiere }, () => {
            try {
              AsyncStorage.setItem('arrayM', JSON.stringify(arrayM));
            } catch (error) {
              // Error retrieving data
              console.log('error.message');
            }
            try {
              AsyncStorage.setItem('introducere', JSON.stringify(introducere));
            } catch (error) {
              // Error retrieving data
              console.log('error.message');
            }
          });
        });
      db.collection('PostuMare')
        .get()
        .then(querySnapshot => {
          let arrayM = [];
          let introducere;
          let incheiere;
          querySnapshot.forEach(function(doc) {
            let data = doc.data();
            if (doc.data().introducere) {
              introducere = {
                introducere: doc.data().introducere,
                introducere1: doc.data().introducere1,
                introducere2: doc.data().introducere2,
                introducere3: doc.data().introducere3,
                introducere4: doc.data().introducere4,
                title: doc.data().Title,
                linkPhoto: doc.data().linkphoto,
                TitluCeAparePePoza: doc.data().TitluCeAparePePoza,
                autor: doc.data().autori
              };
            }
            if (doc.data().incheiere) {
              incheiere = {
                incheiere: doc.data().incheiere,
                incheiere1: doc.data().incheiere1,
                incheiere2: doc.data().incheiere2,
                incheiere3: doc.data().incheiere3,
                incheiere4: doc.data().incheiere4,
                publicat: doc.data().publicat,
                title: doc.data().Title,
                linkPhoto: doc.data().linkphoto,
                TitluCeAparePePoza: doc.data().TitluCeAparePePoza,
                autor: doc.data().autori
              };
            }
            let news = {
              autori: doc.data().autori,
              evanghelia1: doc.data().evangheliaBold,
              evanghelia2: doc.data().evanghelia2,
              id: doc.data().id,
              title: doc.data().title,
              TitluCeAparePePoza: doc.data().TitluCeAparePePoza,
              linkPhoto:
                doc.data().linkphoto ||
                'https://media.swncdn.com/cms/CCOM/47839-pray-ceasing.630w.tn.jpg',
              color: doc.data().culoare,
              meditatia1: doc.data().meditatia1,
              meditatia2: doc.data().meditatia2,
              meditatia3: doc.data().meditatia3,
              meditatia4: doc.data().meditatia4,
              meditatia5: doc.data().meditatia5,
              rugaciune: doc.data().rugaciune,
              indemn1: doc.data().indemnBold,
              indemn2: doc.data().indemn2,
              publicare: doc.data().publicare
            };
            arrayM.push(news);
          });
          this.setState({
            PostuMareArray: arrayM,
            introducerePostuMare: introducere,
            incheierePostuMare: incheiere
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('arrayM');
      const introducere = await AsyncStorage.getItem('introducere');
      if (value !== null) {
        this.setState({ imGood: JSON.parse(value) }, () => {});
      } else {
        console.log('no data found');
      }
      if (introducere !== null) {
        this.setState({ introducere: JSON.parse(introducere) }, () => {});
      } else {
      }
    } catch (error) {
      console.log('retrive data -- no data');
      // Error retrieving data
    }
  };
  componentDidMount() {
    this.retrieveData();
    this.callFirestore();
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this.callFirestore();
    }
    this.setState({ appState: nextAppState });
  };
  onLearnMore = (imGood, introducere, final) => {
    this.props.navigation.navigate('ListOfItems', {
      imGood,
      introducere,
      final,
      value
    });
  };
  render() {
    return (
      <ImageBackground
        source={{ uri: 'https://svgsilh.com/svg_v2/2354614.svg' }}
        style={{ width: '100%', height: '100%' }}
      >
        <ScrollView>
          <List containerStyle={{ marginTop: 0 }}>
            <ListItem
              containerStyle={{
                backgroundColor: 'red'
              }}
              roundAvatar
              avatar={{
                uri:
                  'https://i2.wp.com/www.preda.org/wp-content/uploads/2018/03/001-83.jpg?fit=600%2C400&ssl=1'
              }}
              title={
                <Text style={{ color: 'white', paddingLeft: 10, fontSize: 20 }}>
                  Îmbrățișați de Cristos
                </Text>
              }
              subtitle={
                <Text style={{ color: 'white', paddingLeft: 10 }}>
                  Postul Mare 2019
                </Text>
              }
              onPress={() =>
                this.onLearnMore(
                  this.state.PostuMareArray,
                  this.state.introducerePostuMare,
                  this.state.incheierePostuMare,
                  (value = 'Îmbrățișați de Cristos')
                )
              }
            />
            <ListItem
              containerStyle={{
                backgroundColor: 'red'
              }}
              roundAvatar
              avatar={{
                uri:
                  'https://www.in-vendita.it/i/GetImage?Url=http%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FMTU0NVgxMTAw%2Fz%2FJxMAAMXQl6pRYpz-%2F%24_1.JPG&SizeWidth=0&SizeHeight=0'
              }}
              title={
                <Text style={{ color: 'white', paddingLeft: 10, fontSize: 20 }}>
                  Căutarea ancorei
                </Text>
              }
              subtitle={
                <Text style={{ color: 'white', paddingLeft: 10 }}>
                  Advent 2018
                </Text>
              }
              onPress={() =>
                this.onLearnMore(
                  this.state.imGood,
                  this.state.introducere,
                  (value = 'Cautarea Ancorei')
                )
              }
            />
          </List>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Main;

var x = 1;

function fact(z) {
  for (i = 1; i <= z; i++) {
    x = x * i;
  }
  return x;
}
