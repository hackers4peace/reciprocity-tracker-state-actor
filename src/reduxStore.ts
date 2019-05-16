import {
  createStore,
  compose,
  combineReducers
} from 'redux'
import reducers from './reducers'


const reduxStore = createStore(
  combineReducers(reducers),
  compose()
)

export default reduxStore
