import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools }                         from 'redux-devtools-extension';
import appReducer                                      from './reducers/app.reducer'
import thunk                                           from 'redux-thunk'
import categoryReducer                                 from './reducers/category.reducer'

const rootReducer = combineReducers({app: appReducer, category: categoryReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store
