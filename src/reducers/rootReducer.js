// this is the root reducer
// to make root reducer:
// 1. Get combineReducers method from redux
// 2. Call combineReducers method and pass it an object combineReducers({})
// 3. Each key/property of object will be a single piece of application/redux state
// 4. Each value will be a single reducer (imported)

import { combineReducers } from 'redux'; //1

combineReducers({ //2
	weather: WeatherReducer, //3&4
})