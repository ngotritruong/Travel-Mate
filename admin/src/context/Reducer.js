const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        admin: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        admin: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        admin: null,
        isFetching: false,
        error: true,
      };
      case "UPDATE_START":
        return {
          ...state,
          isFetching:true,
        };
      case "UPDATE_SUCCESS":
        return {
          admin: action.payload,
          isFetching: false,
          error: false,
        };
      case "UPDATE_FAILURE":
        return {
          admin: state.admin,
          isFetching: false,
          error: true,
        };
    case "LOGOUT":
      return {
        admin: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
