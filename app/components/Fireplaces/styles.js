import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textContainer: {
    flex: 1
  },
  title: {
    flex: 1,
    fontSize: 30,
    fontFamily: 'serif',
    marginBottom: 2,
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 5,
    margin: 2
  },
  cell: {
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});