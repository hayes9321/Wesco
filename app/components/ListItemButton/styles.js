import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flexGrow: 1,
    height: 60,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    margin: 5,
  },
  modalButton: {
    marginTop: 10,
  },
  pickerItem: {
    fontSize: 16,
  },
  itemSelect: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 4,
    marginBottom: 10,
  },
  headerStyle: {
    fontSize: 16,
    marginBottom: 10,
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
  },
  colorStyle: {
    color: 'black',
  },
});