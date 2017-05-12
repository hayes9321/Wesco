function calcItemsInPrice(state, price){
  return state.priceTotal.reduce((prev, price) =>{
    return price + prev;
  }, 0) + price;
}

function calcItemsInGmcPrice(state, price){
  return state.gmcPriceTotal.reduce((prev, price) =>{
    return price + prev;
  }, 0) + price;
}

function calcRemoveItemPrice(state, price){
  return state.priceTotal.reduce((prev,price) =>{
    return price - prev;
  }, 0) - price;
}


function calcRemoveGmcItemPrice(state, price){
  return state.gmcPriceTotal.reduce((prev,price) =>{
    return price - prev;
  }, 0) - price;
}


function itemAlreadySelected(state, currentId) {
  for(var i = 0; i< state.itemSelected.length; i++){
    if(state.itemSelected[i] !== currentId){
      return state.itemSelected;
    }
  }
}


let ModalState = (state = {priceTotal: [0], gmcPriceTotal: [0], itemSelected: [] }, action) => {
  switch (action.type) {
    case 'ADD_ITEM': 
    console.log(itemAlreadySelected(state, action.payload.id))
      return Object.assign({}, state, {
        priceTotal: [calcItemsInPrice(state, parseFloat(action.payload.itemSelected))],
        gmcPriceTotal: [calcItemsInGmcPrice(state, parseFloat(action.payload.itemInfo.clubPrice))],
        itemSelected:[{
          id: action.payload.id,
          active: true,
          itemInfo: action.payload.itemInfo,
          itemSelected: action.payload.itemSelected

        }, ...state.itemSelected]      
      })
    case 'REMOVE_ITEM':
      return Object.assign({}, state, {
        priceTotal: [calcRemoveItemPrice(state, parseFloat(action.payload.priceTotal))],
        gmcPriceTotal: [calcRemoveGmcItemPrice(state, parseFloat(action.payload.gmcPriceTotal))],
        itemSelected: state.itemSelected.filter((item) =>{
          return item.id !== action.payload.id
        })

      })
    default:
      return state;
  }
}

export default ModalState;