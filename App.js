import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import CollaspibleToolbar from './CollaspibleToolbar';
import {Colors} from './Colors';

const exercises = [
  'Running',
  'Jogging',
  'PushUps',
  'Squats',
  'Dumbbell rows',
  'Dead Lifts',
  'Single-leg deadlifts',
  'Burpees',
  'Side planks',
  'Situps',
  'Glute bridge',
  'Side Plank with Straight Leg',
  'Rope Skipping',
  'Supine Pelvic Tilts',
  'Standing Calf Raises - Wall',
  'Single Leg Stand',
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CollaspibleToolbar
          title={'Exercises'}
          headerColor={Colors.primary}
          headerColorDark={Colors.primaryDark}
          image={require('./assets/sports.png')}
          backPress={this.backPress}>
          <FlatList
            data={exercises}
            renderItem={({item, index}) => (
              <Text style={styles.item}>{item}</Text>
            )}
            keyExtractor={index => index.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </CollaspibleToolbar>
      </View>
    );
  }

  backPress = () => {
    alert('Navigate Back');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.gray,
  },
});
