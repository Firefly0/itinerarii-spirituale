import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Tile, List, ListItem, Text } from 'react-native-elements';

class Details extends Component {
  render() {
    const { picture, name, email, evanghelia } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.thumbnail}}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />
        {evanghelia && (
        <View style={{margin:8}}>
            <Text style={{fontWeight: 'bold', margin: 10}}>Evanghelia </Text>
            <Text style={{fontStyle:'italic', marginTop: 10}}>{'\t'}{evanghelia.citat} </Text>
            <Text style={{fontWeight:'bold'}}>{'\t'}{evanghelia.boldcitat}</Text>
            <Text>{'\t'}{evanghelia.evanghelia}</Text>  
            <Text style={{fontStyle: 'italic', textAlign: 'right'}}>{evanghelia.finalevanghelia}</Text>      
        </View>)}
        <View style={{backgroundColor: 'azure', justifyContent: 'center', alignItems: 'center', height:500}}>
          <Text>Aici o sa fie meditatia, probabil</Text>
        </View>
        <View style={{backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center', height:100}}>
          <Text>Indemn din biblie</Text>
        </View>
        <View style={{backgroundColor: 'sea-green', justifyContent: 'center', alignItems: 'center', height:300}}>
          <Text>Rugaciunea</Text>
        </View>
          
      </ScrollView>
    );
  }
}

export default Details;