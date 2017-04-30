import globalNavigation from './components/GlobalNavigation/reducer';
import tabs from './components/ApplicationTabs/reducer';
import feed from './components/Feed/reducer';
import itemSelected from './components/ModalWindow/reducer';
import removeItem from './components/PriceTotal/reducer';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
  itemSelected: itemSelected,
  removeItem: removeItem,
  globalNavigation: globalNavigation, tabs, feed,
};
export default function createReducer() {
  return combineReducers(applicationReducers);
}
