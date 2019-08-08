import React from 'react';

export const Store = React.createContext();

const initialState = {
  users: [],
  currentUser: [],
  userPost: [],
  userAlbum: [],
  comments: [],
  photos: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'FETCH_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'FETCH_USER_POST':
      return {
        ...state,
        userPost: action.payload
      }
    case 'FETCH_USER_ALBUM':
      return {
        ...state,
        userAlbum: action.payload
      }
    case 'FETCH_COMMENTS':
      return {
        ...state,
        comments: action.payload
      }
    case 'FETCH_PHOTOS':
      return {
        ...state,
        photos: action.payload
      }
    case 'ADD_POST':
      return {
        ...state,
        userPost: [...state.userPost, action.payload]
      }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>
}