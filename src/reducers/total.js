export const totalReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TOTAL":
      return { ...action.payload };
    default:
      return state;
  }
};

