const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      const newCart = [...state.cart];
      newCart.push(action.payload);

      return {
        cart: [...newCart],
      };
    }

    case 'DELETE_PRODUCT_FROM_CART': {
      const id = action.payload;
      var newCart = [...state.cart];
      var index = findProductInCart(newCart, id);

      if (index !== -1) {
        newCart.splice(index, 1);
      }
      return {
        cart: [...newCart],
      };
    }

    default:
      return state;
  }
};

var findProductInCart = (cart, id) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default cartReducer;
