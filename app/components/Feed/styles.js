import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  welcomeMsg: {
    flex: 0, 
    fontSize: 40, 
    fontFamily: 'serif', 
    backgroundColor: '#006bb6', 
    color: 'white', 
    textAlign: 'center',
    margin: 30 
  },
  container: {
    flex: 1, 
    backgroundColor: '#006bb6', 
  },
	button: {
		fontSize: 30,
		paddingRight: 10,
		paddingTop: 2
	},
  priceButton: {
    height: 50, 
    marginTop: 50,
    margin: 20, 
    backgroundColor: "#e86c4a", 
    borderWidth: 1, 
    borderColor: 'white' 
  },
  priceBtnTxt: {
    paddingTop: 6, 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 20, 
    fontFamily: 'serif'
  }
});
