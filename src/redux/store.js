import { legacy_createStore as createStore} from 'redux'
import cakeReducer from './cakes/cakereducer'

const store = createStore(cakeReducer)

export default store

