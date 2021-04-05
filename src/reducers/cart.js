const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      const index = findProductInCart(state.cart, action.payload.id);

      if (index !== -1) {
        state.cart[index].quantity = state.cart[index].quantity + 1;

        return {
          cart: [...state.cart],
        };
      }

      const newProduct = {
        ...action.payload,
        quantity: 1,
      };

      state.cart.push(newProduct);

      return {
        cart: [...state.cart],
      };
    }

    case 'UPDATE_CART': {
      const {id, quantity} = action.payload;
      const index = findProductInCart(state.cart, id);

      if (index !== -1) {
        state.cart[index].quantity = quantity;

        return {
          cart: [...state.cart],
        };
      }
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
