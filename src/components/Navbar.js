import React from 'react';
import './main.css'


export default React.createClass({
		render() {
			return (
			<div className="navContainer">
				<div className="menu">
				<ul className="menuOptions">
				<li className="menuText"><input type="text" name="search" placeholder="Search" className="searchBar" /></li>
				<li className="menuText"><a className="underline" href="#">Pull Requests</a></li>
				<li className="menuText"><a className="underline" href="#">Issues</a></li>
				<li className="menuText"><a className="underline" href="#">Gist</a></li>
				</ul>
				</div>
			</div>

 		)
	
  	 }
})

		