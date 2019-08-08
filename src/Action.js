import { api } from './Api';

export const fetchUsers = async (dispatch) => {
  try {
    const endPoint = '/users';
    const response = await api.get(endPoint);
    if (response.status === 200) {
      return dispatch({
        type: 'FETCH_USERS',
        payload: response.data
      });
    }
  } catch (error) {
    console.log(error)
  }
};

export const fetchCurrentUser = async (dispatch, userId) => {
  try {
    const endPoint = '/users/' + userId;
    const response = await api.get(endPoint);
    if (response.status === 200) {
      return dispatch({
        type: 'FETCH_CURRENT_USER',
        payload: response.data
      });
    }
  } catch (error) {
    console.log(error)
  }
};

export const fetchUserPost = async (dispatch, userId) => {
  try {
    const endPoint = '/posts?userId=' + userId;
    const response = await api.get(endPoint);
    if (response.status === 200) {
      return dispatch({
        type: 'FETCH_USER_POST',
        payload: response.data
      });
    }
  } catch (error) {
    console.log(error)
  }
};

export const fetchUserAlbum = async (dispatch, userId) => {
  try {
    const endPoint = '/albums?userId=' + userId;
    const response = await api.get(endPoint);
    if (response.status === 200) {
      return dispatch({
        type: 'FETCH_USER_ALBUM',
        payload: response.data
      });
    }
  } catch (error) {
    console.log(error)
  }
};

export const fetchComments = async (dispatch, postId) => {
  try {
    const endPoint = '/posts/' + postId + '/comments';
    const response = await api.get(endPoint);
    if (response.status === 200) {
      return dispatch({
        type: 'FETCH_COMMENTS',
        payload: response.data
      });
    }
  } catch (error) {
    console.log(error)
  }
};

export const fetchPhotos = async (dispatch, albumId) => {
  try {
    const endPoint = '/photos/?albumId=' + albumId;
    const response = await api.get(endPoint);
    if (response.status === 200) {
      return dispatch({
        type: 'FETCH_PHOTOS',
        payload: response.data
      });
    }
  } catch (error) {
    console.log(error)
  }
};

export const addPost = async (dispatch, payload) => {
  try {
    const endPoint = '/posts';
    const response = await api.post(endPoint, payload);
    if (response.status === 200) {
      return dispatch({
        type: 'ADD_POST',
        payload: response.data
      });
    }
  } catch (error) {
    console.log(error)
  }
};