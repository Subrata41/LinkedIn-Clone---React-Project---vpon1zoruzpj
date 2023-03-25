import { auth, provider } from '../firebase';
import { SET_USER } from './actionType';

export function setUser(payload) {
  return {
    type: SET_USER,
    user: payload,
  };
}

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => dispatch(setUser(payload.user)))
      .catch((err) => alert(err.message));
  };
}

 