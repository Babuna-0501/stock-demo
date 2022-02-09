export const initialState = {
  basket: [],
  collect: [],
  user: null
};

// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

export const getCollectTotal = (collect) => 
collect?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;



  // Collections starts here

      case "ADD_TO_COLLECT":
        return {
          ...state,
          collect: [...state.collect, action.item],
        };
      
      case 'EMPTY_COLLECT':
        return {
          ...state,
          collect: []
        }
  
      case "REMOVE_FROM_COLLECT":
        let newCollect = [...state.collect];
  
        if (index >= 0) {
          newCollect.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in collect!`
          )
        }
  
        return {
          ...state,
          collect: newCollect
        }
      
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  }
};


export default reducer;
