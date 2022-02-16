const initialState = {
  loading: false,
  list: {},
  error: "",
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: "",
      };
    case "FETCH_USER_ERROR":
      return {
        ...state,
        loading: false,
        list: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
