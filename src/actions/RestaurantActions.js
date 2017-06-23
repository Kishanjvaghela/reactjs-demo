import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  ON_ITEM_CLICKED
} from '../values/constants';
import getUsers from '../api'

export function getData(){
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data: data,
  }
}
export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData);
    var url = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';
    fetch(url)
        .then(response => {
          console.log("response");
          return response.json()
        })
        .then(json => {
          console.log(json);
          dispatch(getDataSuccess(json.restaurants))
        })
        .catch((err) => {
          dispatch(getDataFailure);
          console.log('err:',err)
        });
    // getUsers()
    //   .then((data) => {
    //     dispatch(getDataSuccess(data))
    //   })
    //   .catch((err) => console.log('err:',err))
  }
}

export function onItemClicked(detail){
  return {
    type: ON_ITEM_CLICKED,
    data: detail
  }
}
