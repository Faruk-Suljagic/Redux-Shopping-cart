import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
} from "../actions/types";

export const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log("inside prod q");
    console.log("action is", action);
    console.log("prod name", name);

    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name,
    });
  };
};

export const clearProduct = (name) => {
  return (dispatch) => {
    console.log("inside clear prods");
    console.log("prod name", name);

    dispatch({
      type: CLEAR_PRODUCT,
      payload: name,
    });
  };
};
