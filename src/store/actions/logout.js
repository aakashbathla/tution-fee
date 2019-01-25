import * as actionTypes from "./actionTypes";
export const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
      type: actionTypes.AUTH_INITIATE_LOGOUT
    };
  };
  export const logoutSucceed = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
      type: actionTypes.LOGOUT
    };
  };