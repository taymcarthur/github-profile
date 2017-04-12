import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar'
// import Header from './Header'
// import Sidebar from './Sidebar'
import Main from './Main'
import Sidebar from './Sidebar'
import "./main.css"

export default React.createClass({
  render() {
    return (
	 	<Router>
			<div>
      <div className="Navbar"><Navbar /></div>
	  <div className="sideBar"><Sidebar /></div>
	  <div className="Main"><Main /></div>



			</div>

		</Router>

	)
	}
	})