import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  headerText:{
    fontSize: 46,
    fontWeight: '500',
    color: '#006bb6',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    justifyContent: 'flex-start',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 90,
    padding: 5,
    margin: 5,
  },
  text: {
    color: 'black',
    fontSize: 21,
  },
  gmcPrice: {
    color: 'green',
    fontSize: 21,
  },
  regularPrice: {
    color: 'red',
    fontSize: 21,
  },
  categoriesText: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  itemText:{
    fontSize: 21,
    color:'black',
    fontWeight: 'bold',
  },
});