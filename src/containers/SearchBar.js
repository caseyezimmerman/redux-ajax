import React, { Component } from 'react';
//connect is the glue between react and redux 
import {connect} from 'react-redux';
import FetchWeather from '../actions/fetchWeather';
import { bindActionCreators } from 'redux';

class SearchBar extends Component{
	constructor(){
		super();
		this.handleWeather = this.handleWeather.bind(this)
		this.handleStocks = this.handleStocks.bind(this)
	}

	handleWeather(event){
		event.preventDefault()
		// console.log("someone submitted a zipcode")
		const zipCode = document.getElementById('weather-input').value
		this.props.fetchWeather(zipCode);
	}

	handleStocks(event){
		event.preventDefault()
		console.log("someone submitted stock")
	}


	render(){
        return(
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#">Page 1</a></li>
                  <li><a href="#">Page 2</a></li>
                </ul>
                <form onSubmit={this.handleWeather} className="navbar-form navbar-left" action="/action_page.php">
                  <div className="form-group">
                    <input id="weather-input" type="text" className="form-control" placeholder="Zip Code" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <form onSubmit={this.handleStocks} className="navbar-form navbar-left" action="/action_page.php">
                  <div className="form-group">
                    <input id="stock-input" type="text" className="form-control" placeholder="Stock Name" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
              </div>
            </nav>            
        )
    }

}

// this is a function sent to connect. Connect will run it later
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		fetchWeather: FetchWeather 
		//on the left is locally what it will be called with props, 
		// on the right will be what we called it when we imported it up top
	}, dispatch)
}


// connect takes 2 params:
// 1. state
// 2. actions
export default connect(null, mapDispatchToProps)(SearchBar);


