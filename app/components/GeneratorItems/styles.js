import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textContainer: {
    flex: 1,
    height: 50
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  row: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
  },
  cell: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  description: {
    margin: 10
  }
});