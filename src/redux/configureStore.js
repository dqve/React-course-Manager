import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initialState){
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE
	return createStore(
		rootReducer,
		initialState, 
		applyMiddleware(reduxImmutableStateInvariant())
	)
}