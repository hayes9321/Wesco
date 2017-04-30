function PriceTotal(state = {}, action) {
  switch (action.type) {
    case 'REMOVE_I':
      return Object.assign({}, state, {
        id: action.payload.id
        // console.log(state)
        // itemSelected: state.itemSelected.filter((item) => {
        //     return item.id !== action.payload.id
        //   })
        })
    default:
      return state
  }
}

export default PriceTotal;