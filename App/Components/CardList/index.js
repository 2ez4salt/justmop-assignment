import FlipCard from 'react-native-flip-card';
import HTML from 'react-native-render-html';
import React from 'react';
import Styles from './Styles';
import {View, Text, Image} from 'react-native';

export function CardList(props) {
  return props.data.map((c, i) => {
    return (
      <FlipCard
        friction={10}
        perspective={500}
        flipHorizontal={true}
        flipVertical={false}
        clickable={true}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 400,
            height: 548,
            margin: 25,
          }}>
          <Image
            style={{flex: 1}}
            resizeMode="cover"
            resizeMethod="scale"
            defaultSource={require('./../../Assets/emptycard.png')}
            source={{uri: c.img}}
          />
        </View>

        <View style={Styles.container}>
          <Text style={Styles.text}>
            <Text style={Styles.boldText}>Name</Text> :{c.name}
          </Text>
          <Text style={Styles.text}>
            <Text style={Styles.boldText}>Card Set</Text> :{c.cardSet}
          </Text>
          <Text style={Styles.text}>
            <Text style={Styles.boldText}>Class</Text> :{c.playerClass}
          </Text>
          <Text style={Styles.text}>
            <Text style={Styles.boldText}>Type</Text> :{c.type}
          </Text>
          <HTML html={c.text} />
        </View>
      </FlipCard>
    );
  });
}
