const BASEURL = 'https://jsonplaceholder.typicode.com';

export const fetchDataAction = async (dispatch) => {
  const data = await fetch(BASEURL + '/users');
  const dataJson = await data.json();

  return dispatch({
    type: 'FETCH_USERS',
    payload: dataJson
  });
};