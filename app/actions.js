const actions = {
  addItem: function(itemInfo,itemSelected){
    return{
      type: 'ADD_ITEM',
      payload: itemInfo, itemSelected
    }
  },
  removeItem: function(id){
    return{
      type:'REMOVE_ITEM',
      payload: id
    }
  }
}
export default actions