let initialData = [];
if (window) {
  if (localStorage.getItem("cart")) {
    initialData = JSON.parse(localStorage.getItem("cart"));
  } else {
    initialData = [];
  }
}
export const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...action.payload];
    case "CLEAR_CART" :
      return []
    default:
      return state;
  }
};
