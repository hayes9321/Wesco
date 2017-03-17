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
    flexDirection:'row',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    flexGrow: 1,
    height: 70,
    overflow: 'hidden',
    margin:5,
    paddingTop:8,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    margin: 5,
  },
  modalButton: {
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: 10,
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
});