// This is a reducer
// To make a reducer

// 1. Make a function that has two params:
// 	-state (usually set a default)
// 	-action
// 2. The state param contains THIS reducers state. Just like a variable.
// 3. The action param will contain whwatever object the action sends usually	
// 	-type (REQUIRED)
// 	-payload (data/JSON/stuff)
// 4. CHeck the action.type to see if I care
// 	-if i care, return some new state
// 5. If we dont care, return state (old state)

export default function(state = null, action){  ///1, 3 & 4
	switch(action.type){
		case "GET_WEATHER":
			//do something
			console.log(action)
		case "GET_STOCKS":
			//do some other stuff 
		default: 
			// If neithr case happens, do this
			return state 



	}
}


// a switch statement is an if statement that checks the value of one thing 
// and only one thing!!!!