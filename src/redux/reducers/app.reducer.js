import { APP_ERROR, APP_LOADING } from '../types/app.type'

const initialState = {loading: false, error: null}

const appReducer = (state = initialState, action) => {
  switch(action.type){
    case APP_LOADING:
      return {...state, loading: action.payload};
    case APP_ERROR:
      return {...state, error: action.payload};
    default: return state;
  }
}

export default appReducer;