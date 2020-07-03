import React, {useEffect} from 'react';
import {TextInput, ScrollView, View, Text} from 'react-native';
import Loading from '../../Components/Loading';

import {CardList} from '../../Components/CardList';
import DelayInput from 'react-native-debounce-input';
import {searchCard} from '../../Services';
import styles from './Styles';
export default function CardSearch({navigation}) {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState('');

  const [data, setData] = React.useState(null);

  async function searchCardsx(text) {
    setValue(text);
    setLoading(true);
    const response = await searchCard(text);
    console.log('response', response);
    if (response.status == 200) {
      setData(response.data);
    } else {
      alert(`${response.status}  some bad things happened`);
    }

    console.log('response', response);
    setLoading(false);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <DelayInput
          value={value}
          minLength={3}
          placeholder="Search 🔎"
          onChangeText={(text) => searchCardsx(text)}
          delayTimeout={500}
          style={styles.input}
        />
        <Text style={{margin: 10}}>
          Searched value : <Text style={{fontWeight: 'bold'}}>{value}</Text>
        </Text>
        {loading ? (
          <Loading style={{justifyContent: 'center'}} />
        ) : data ? (
          <CardList data={data} />
        ) : null}
      </View>
    </ScrollView>
  );
}
