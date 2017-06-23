import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  ON_ITEM_CLICKED
} from '../values/constants';

const initialState = {
  data: [],
  isFetching: false,
  error: false,
  detail: null,
}

export default function dataReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        detail: null,
        isFetching:true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        detail: null,
        isFetching:false
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        error: true,
        detail: null,
        isFetching:false
      }
    case ON_ITEM_CLICKED:
      return {
        ...state,
        error: false,
        isFetching:false,
        detail: action.data,
      }
      break;
    default:
      return state;
  }
}
