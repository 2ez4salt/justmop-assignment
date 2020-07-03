import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 400,
    height: 548,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  boldText: {
    fontSize: 30,
  },
  searchText: {
    fontSize: 20,
  },
  text : {
      fontSize: 20, paddingBottom: 10
  }
  button: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 0.5,
    margin: 10,
    marginTop: 25,
    marginBottom: 5,
  },
});
