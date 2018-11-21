import React, { Component } from 'react';
import { Text, View, ScrollView, AsyncStorage, AppState } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { users } from '../../constants/data';

import ApiKeys from '../../constants/ApiKeys';
import * as firebase from 'firebase';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      docs: [],
      imGood: [],
      introducere: {},
      appState: AppState.currentState
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

      const culoareSaptamana1 = '#703F7D';
      const culoareSaptamana2 = '#82568B';
      const culoareSaptamana3 = '#8A6694';
      const culoareSaptamana4 = '#A17EA8';
      const culoareCraciun = culoareCraciun;

      // Saptamana 1

      db.collection('Advent')
        .doc('11 Duminica, 2 Decembrie')
        .set({
          title: 'Duminică, 2 decembrie 2018',
          autori: 'Noi si voi',
          evanghelia:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          evanghelia2: 'imply dummy text of the printing and typesetting indus',
          indemn:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
          meditatia:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          rugaciune:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.',
          linkphoto:
            'https://cdn2-www.dogtime.com/assets/uploads/2011/03/puppy-development-460x306.jpg',
          culoare: culoareSaptamana1,
          publicare: 'true',
          id: '0'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      /*
      db.collection('Advent')
        .doc('12 Luni, 3 decembrie 2018')
        .set({
          title: 'Luni, 3 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana1,
          publicare: 'true',
          id: '1'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('13 10 Marți, 4 decembrie 2018')
        .set({
          title: 'Marți, 4 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana1,
          publicare: 'true',
          id: '2'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('14 Miercuri, 5 decembrie 2018')
        .set({
          title: 'Miercuri, 5 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana1,
          publicare: 'true',
          id: '3'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('15 Joi, 6 decembrie 2018')
        .set({
          title: 'Joi, 6 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana1,
          publicare: 'true',
          id: '4'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('16 Vineri, 7 decembrie 2018')
        .set({
          title: 'Vineri, 7 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana1,
          publicare: 'true',
          id: '5'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('17 Sâmbătă, 8 decembrie 2018')
        .set({
          title: 'Sâmbătă, 8 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana1,
          publicare: 'true',
          id: '6'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      // Saptamana 2

      db.collection('Advent')
        .doc('18 Duminică, 9 decembrie 2018')
        .set({
          title: 'Duminică, 9 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana2,
          publicare: 'true',
          id: '7'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('19 Luni, 10 decembrie 2018')
        .set({
          title: 'Luni, 10 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana2,
          publicare: 'true',
          id: '8'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('20 Marți, 11 decembrie 2018')
        .set({
          title: 'Marți, 11 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana2,
          publicare: 'true',
          id: '9'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('21 Miercuri, 12 decembrie 2018')
        .set({
          title: 'Miercuri, 12 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana2,
          publicare: 'true',
          id: '10'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('22 Joi, 13 decembrie 2018')
        .set({
          title: 'Joi, 13 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana2,
          publicare: 'true',
          id: '11'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('23 Vineri, 14 decembrie 2018')
        .set({
          title: 'Vineri, 14 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana2,
          publicare: 'true',
          id: '12'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('24 Sâmbătă, 15 decembrie 2018')
        .set({
          title: 'Sâmbătă, 15 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana2,
          publicare: 'true',
          id: '13'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      // Saptamana 3

      db.collection('Advent')
        .doc('25 Duminică, 16 decembrie 2018')
        .set({
          title: 'Duminică, 16 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana3,
          publicare: 'true',
          id: '14'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('26 Luni, 17 decembrie 2018')
        .set({
          title: 'Luni, 17 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana3,
          publicare: 'true',
          id: '15'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('27 Marți, 18 decembrie 2018')
        .set({
          title: 'Marți, 18 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana3,
          publicare: 'true',
          id: '16'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('28 Miercuri, 19 decembrie 2018')
        .set({
          title: 'Miercuri, 19 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana3,
          publicare: 'true',
          id: '17'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('29 Joi, 20 decembrie 2018')
        .set({
          title: 'Joi, 20 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana3,
          publicare: 'true',
          id: '18'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('30 Vineri, 21 decembrie 2018')
        .set({
          title: 'Vineri, 21 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana3,
          publicare: 'true',
          id: '19'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('31 Sâmbătă, 22 decembrie 2018')
        .set({
          title: 'Sâmbătă, 22 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana3,
          publicare: 'true',
          id: '20'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      // Saptamana 4

      db.collection('Advent')
        .doc('32 Duminică, 23 decembrie 2018')
        .set({
          title: 'Duminică, 23 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana4,
          publicare: 'true',
          id: '21'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      db.collection('Advent')
        .doc('33 Luni, 24 decembrie 2018')
        .set({
          title: 'Luni, 24 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareSaptamana4,
          publicare: 'true',
          id: '22'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      // Craciun Sptamana 1

      db.collection('Advent')
        .doc('34 Marți, 25 decembrie 2018')
        .set({
          title: 'Marți, 25 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '23'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('35 Miercuri, 26 decembrie 2018')
        .set({
          title: 'Miercuri, 26 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '24'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('36 Joi, 27 decembrie 2018')
        .set({
          title: 'Joi, 27 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '25'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('37 Vineri, 28 decembrie 2018')
        .set({
          title: 'Vineri, 28 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '26'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('38 Sâmbătă, 29 decembrie 2018')
        .set({
          title: 'Sâmbătă, 29 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '27'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('39 Duminică, 30 decembrie 2018')
        .set({
          title: 'Duminică, 30 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '28'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      //  Craciun saptamana 2

      db.collection('Advent')
        .doc('40 Luni, 31 decembrie 2018')
        .set({
          title: 'Luni, 31 decembrie 2018',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '29'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('41 Marți, 1 ianuarie 2019')
        .set({
          title: 'Marți, 1 ianuarie 2019',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '30'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('42 Miercuri, 2 ianuarie 2019')
        .set({
          title: 'Miercuri, 2 ianuarie 2019',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '31'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('43 Joi, 3 ianuarie 2019')
        .set({
          title: 'Joi, 3 ianuarie 2019',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '32'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('44 Vineri, 4 ianuarie 2019')
        .set({
          title: 'Vineri, 4 ianuarie 2019',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '33'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('45 Sâmbătă, 5 ianuarie 2019')
        .set({
          title: 'Sâmbătă, 5 ianuarie 2019',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '34'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

      db.collection('Advent')
        .doc('46 Duminică, 6 ianuarie 2019')
        .set({
          title: 'Duminică, 6 ianuarie 2019',
          autori: '',
          evanghelia: '',
          indemn: '',
          meditatia: '',
          rugaciune: '',
          linkphoto: '',
          culoare: culoareCraciun,
          publicare: 'true',
          id: '35'
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
        */

      db.collection('Advent')
        .get()
        .then(querySnapshot => {
          let arrayM = [];
          let introducere;
          querySnapshot.forEach(function(doc) {
            let data = doc.data();
            if (doc.data().introducere) {
              introducere = {
                introducere: doc.data().introducere,
                introducere1: doc.data().introducere1,
                introducere2: doc.data().introducere2
              };
            }
            let news = {
              autori: doc.data().autori,
              evanghelia: doc.data().evanghelia,
              evanghelia2: doc.data().evanghelia2,
              id: doc.data().id,
              title: doc.data().title,
              linkPhoto:
                doc.data().linkphoto ||
                'https://media.swncdn.com/cms/CCOM/47839-pray-ceasing.630w.tn.jpg',
              color: doc.data().culoare,
              meditatia: doc.data().meditatia,
              rugaciune: doc.data().rugaciune,
              indemn: doc.data().indemn,
              publicare: doc.data().publicare
            };
            arrayM.push(news);
          });
          this.setState({ imGood: arrayM, introducere }, () => {
            try {
              AsyncStorage.setItem('arrayM', JSON.stringify(arrayM));
              console.log('stateafteri', this.state);
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

  onLearnMore = item => {
    this.props.navigation.navigate('Details', { item });
  };

  render() {
    console.log('int', this.state.introducere.introducere);
    const { imGood } = this.state;
    const imGoodResult = imGood.filter(item => item.publicare);
    imGoodResult.sort(function(a, b) {
      return b.id - a.id;
    });
    return (
      <ScrollView>
        <List containerStyle={{ marginTop: 0 }}>
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
                  {item.autori}
                </Text>
              }
              onPress={() => this.onLearnMore(item)}
            />
          ))}
          <ListItem
            title={
              <Text
                style={{
                  color: 'white',
                  paddingLeft: 10,
                  fontSize: 20,
                  textAlign: 'center'
                }}
              >
                Introducere
              </Text>
            }
            containerStyle={{
              backgroundColor: '#310C37'
            }}
          />
        </List>
        <Text>Something</Text>
        <Text>{this.state.introducere.introducere}</Text>
        <Text>{this.state.introducere.introducere1}</Text>
        <Text>{this.state.introducere.introducere2}</Text>
      </ScrollView>
    );
  }
}

export default Main;
