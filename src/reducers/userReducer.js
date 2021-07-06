export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TOKEN" :
      return {...action.payload}
    case "LOGIN_USER":
      return {...state,...action.payload.data};
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
