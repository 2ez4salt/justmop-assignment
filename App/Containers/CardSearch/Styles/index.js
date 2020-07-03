import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,

    justifyContent: 'center',
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
  },
  searchText: {
    fontSize: 20,
  },
  button: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 0.5,
    margin: 10,
    marginTop: 25,
    marginBottom: 5,
  },
});
