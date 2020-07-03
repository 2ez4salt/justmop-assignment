import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {getCards} from './../../Services';
import Loading from '../../Components/Loading';
import {getUniqueMechanics} from '../../Helpers';
import {getCardsByMechanic} from '../../Helpers';
import styles from './Styles';
import CardSearch from '../CardSearch';
export default function Mechanics({navigation}) {
  const [cards, setCards] = useState([]);
  const [mechanics, setMechanics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMechanics();
  });

  async function fetchMechanics() {
    const response = await getCards();
    setCards(response.data);
    const mechanics = await getUniqueMechanics(cards);
    if (mechanics.length > 0) {
      setLoading(true);
    }
    setMechanics(mechanics);
  }

  async function segueCards(selectedMechanic) {
    const cardsByMechanic = await getCardsByMechanic(cards, selectedMechanic);

    navigation.navigate('Cards', {
      cardsByMechanic: cardsByMechanic,
    });
  }

  function renderMechanics(item) {
    return (
      <TouchableOpacity onPress={() => segueCards(item)}>
        <View style={styles.mech}>
          <Text style={styles.text}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardSearch')}>
            <View style={styles.button}>
              <Text style={styles.searchText}>Go Search 🔎</Text>
            </View>
          </TouchableOpacity>
          <FlatList
            data={mechanics}
            renderItem={({item}) => renderMechanics(item)}
          />
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
}
