import React, {useEffect} from 'react';
import FlipCard from 'react-native-flip-card';
import HTML from 'react-native-render-html';

import {View, Text, Image} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {CardList} from '../../Components/CardList';
import Loading from '../../Components/Loading';

export default function Cards({navigation, route}) {
  const {cardsByMechanic} = route.params;

  return (
    <ScrollView>
      <View style={{backgroundColor: 'lightgray'}}>
        {CardList ? <CardList data={cardsByMechanic} /> : <Loading />}
      </View>
    </ScrollView>
  );
}
