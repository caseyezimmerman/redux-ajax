// in order to wire up a redux-react app we need...
// 1. Provider component. this comes from react-redux
// 2. Create store. This comes from redux 
// 3. Reducers to give to create Store 
// 4. Make a single root reducer (3) to import our individual reducers 
// 5. Make at least one individual reducer to import into root
// 6. Create theStore with the reducers
// 7. Put the Provider component with a prop of store with the store around <App />


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'; //1
import { createStore } from 'redux'; //2
import { reducers } from './reducers/rootReducer' //3

ReactDOM.render(<App />, document.getElementById('root'));

