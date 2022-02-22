import axios from "axios";
export function showCard(data) {
  return {
    type: "SHOWCARD",
    payload: data,
  };
}
export function hideCard(data) {
  return {
    type: "HIDECARD",
    payload: data,
  };
}

export function setUser(user) {
  return {
    type: "SETUSER",
    payload: user,
  };
}

export function removeUser() {
  return {
    type: "REMOVEUSER",
  };
}

export function setList(data) {
  return {
    type: "SETLIST",
    payload: data,
  };
}
export function deleteUser(id) {
  return {
    type: "DELETEUSERLIST",
    payload: id,
  };
}

export function fetchUserRequest() {
  return {
    type: "FETCH_USERS_REQUEST",
  };
}

export function fetchUserSuccess(obj) {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: obj,
  };
}

export function fetchUserError(err) {
  return {
    type: "FETCH_USER_ERROR",
    payload: err,
  };
}

export function fetchUsers(pagenumber) {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get(`https://reqres.in/api/users?page=${pagenumber ? pagenumber : 1}`)
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserSuccess(user));
        dispatch(setList(user.data));
      })
      .catch((error) => dispatch(fetchUserError(error)));
  };
}
