const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: !state.myList.some((item) => item.id === action.payload.id)
          ? [...state.myList, action.payload]
          : state.myList,
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing: state.trends.find(
          (item) =>
            item.id === Number(action.payload) ||
            state.originals.find(
              (item) => item.id === Number(action.payload)
            ) ||
            []
        ),
      };
    default:
      return state;
  }
};
export default reducer;
