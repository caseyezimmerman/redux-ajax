// in order to wire up a redux-react app we need...
// 1. Provider component. this comes from react-redux
// 2. Create store. This comes from redux 
// 3. Reducers to give to create Store 
// 4. Make a single root reducer (3) to import our individual reducers 
// 5. Make at least one individual reducer to import into root
// 6. Create theStore with the reducers
// 7. Put the Provider component with a prop of store with the store around <App />
// 8. If we need redux middleware we need to import it from redux (applyMiddleWare)
// 9. Import redux promise so that if an action needs to return a promise/async
	// the middleware will tell redux to wait
// 10. 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'; //1
import { createStore, applyMiddleware } from 'redux'; //2 & 8
import reducers from './reducers/rootReducer' //3, 4 & 5
import reduxPromise from 'redux-promise';


// const theStore = createStore(reducers); //6 --removing bc we have middleware
// const theStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore)(reducers); //changed into the next 3 lines
const middleWare = applyMiddleware(reduxPromise);
const theStore = middleWare(createStore);
const theStoreWithReducers = theStore(reducers)


ReactDOM.render(
	<Provider store={theStoreWithReducers}>
		<App /> 
	</Provider>,
	document.getElementById('root')
);

