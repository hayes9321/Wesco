import globalNavigation from './components/GlobalNavigation/reducer';
import tabs from './components/ApplicationTabs/reducer';
import feed from './components/Feed/reducer';
import itemSelected from './components/ModalWindow/reducer';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
  itemSelected: itemSelected,
  globalNavigation: globalNavigation, tabs, feed,
};
export default function createReducer() {
  return combineReducers(applicationReducers);
}
