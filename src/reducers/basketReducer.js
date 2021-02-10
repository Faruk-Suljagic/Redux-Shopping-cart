import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
} from "../actions/types";
const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    samsung: {
      name: "Samsung Note 9",
      tagName: "samsung",
      price: 459.0,
      numbers: 0,
      inCart: false,
    },
    iphone: {
      name: "Iphone 11 product(RED)",
      tagName: "iphone",
      price: 511.0,
      numbers: 0,
      inCart: false,
    },
    nokia: {
      name: "Nokia",
      price: 329.0,
      tagName: "nokia",
      numbers: 0,
      inCart: false,
    },
    huawei: {
      name: "Huawei P30 Pro",
      tagName: "huawei",
      price: 477.0,
      numbers: 0,
      inCart: false,
    },
  },
}; // eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      productSelected.inCart = true;
      console.log(productSelected);

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      return {
        ...state,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers -= 1;
      return {
        ...state,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case CLEAR_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numbersBackup = productSelected.numbers;
      productSelected.numbers = 0;
      productSelected.inCart = false;
      return {
        ...state,
        cartCost: state.cartCost - numbersBackup * productSelected.price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    default:
      return state;
  }
};
