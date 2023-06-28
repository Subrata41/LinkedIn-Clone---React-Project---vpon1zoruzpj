import db, { auth, provider } from "../firebase";
import { SET_LOADING_STATUS, SET_USER, GET_ARTICLES } from "./actionType";

// Action creator function to set the user
export function setUser(payload) {
  return {
    type: SET_USER,
    user: payload,
  };
}

//Loading Status
export function setLoading(status) {
  return {
    type: SET_LOADING_STATUS,
    status: status,
  };
}

//Get Articles Status
export function getArticles(payload, id) {
  return {
    type: GET_ARTICLES,
    payload: payload,
    id: id,
  };
}

export function getUserAuth() {
  return (dispatch) => {
    // Listen for changes in the authentication state
    auth.onAuthStateChanged(async (user) => {
      // If a user is authenticated
      if (user) {
        // Dispatch the setUser action
        dispatch(setUser(user));
      }
    });
  };
}

export function signInAPI() {
  return (dispatch) => {
    // Sign in with a popup using the Google provider
    auth
      .signInWithPopup(provider)
      .then((payload) => dispatch(setUser(payload.user)))
      .catch((err) => alert(err.message));
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => dispatch(setUser(null)))
      .catch((err) => alert(err.message));
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    if (payload.image !== "") {
      dispatch(setLoading(true));

      // Assuming payload.image is the URL of the image
      const downloadURL = payload.image;

      db.collection("articles")
        .add({
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          },
          video: payload.video,
          sharedImg: downloadURL,
          likes: {
            count: 0,
            whoLiked: [],
          },
          comments: 0,
          description: payload.description,
        })
        .then(() => {
          dispatch(setLoading(false));
        })
        .catch((error) => {
          console.log("Error posting article:", error);
          dispatch(setLoading(false));
        });
    } else if (payload.video) {
      dispatch(setLoading(true));

      db.collection("articles")
        .add({
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          },
          video: payload.video,
          sharedImg: "",
          likes: {
            count: 0,
            whoLiked: [],
          },
          comments: 0,
          description: payload.description,
        })
        .then(() => {
          dispatch(setLoading(false));
        })
        .catch((error) => {
          console.log("Error posting article:", error);
          dispatch(setLoading(false));
        });
    } else if (payload.image === "" && payload.video === "") {
      dispatch(setLoading(true));

      db.collection("articles")
        .add({
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          },
          video: "",
          sharedImg: "",
          likes: {
            count: 0,
            whoLiked: [],
          },
          comments: 0,
          description: payload.description,
        })
        .then(() => {
          dispatch(setLoading(false));
        })
        .catch((error) => {
          console.log("Error posting article:", error);
          dispatch(setLoading(false));
        });
    }
  };
}

export function getArticlesAPI() {
  return (dispatch) => {
    dispatch(setLoading(true));
    let payload;
    let id;
    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        id = snapshot.docs.map((doc) => doc.id);
        dispatch(getArticles(payload, id));
      });
    dispatch(setLoading(false));
  };
}

export function updateArticleAPI(payload) {
  return (dispatch) => {
    db.collection("articles").doc(payload.id).update(payload.update);
  };
}
