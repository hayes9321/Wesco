import { cardStackReducer } from 'react-native-navigation-redux-helpers';

const initialState = {
  key: 'feed',
  index: 0,
  routes: [
    {
      key: 'home',
      title: 'Home'
    },
  ],
};

module.exports = cardStackReducer(initialState);
