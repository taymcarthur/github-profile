import React from 'react';
import {getRepo} from '../api/json'
import store from '../api/store/store'
import './main.css'


export default React.createClass({

	getInitialState(){
		return{
			repo: []
   }
},
	componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
			this.setState({
				repo:appState.repo,
		})
	})
	getRepo()

   },

   componentWillunMount(){
   	this.unsubscribe()

   },



render (){
	return(
		<div>
		<div className="tabs">
			<ul className="tabOptions">
			<li className="tabOptionsLi"><a className="a" href="#">Overview</a></li>
			<li className="tabOptionsLi"><a className="a" href="#">Repositories</a></li>
			<li className="tabOptionsLi"><a className="a" href="#">Stars</a></li>
			<li className="tabOptionsLi"><a className="a" href="#">Followers</a></li>
			<li className="tabOptionsLi"><a className="a" href="#">Following</a></li>
			</ul>
		</div>
		<div className="reposit">
		{this.state.repo.map(repo=>(
		<div key={'repo' + repo.id} className="repo">
			<h3><a className="repoTitle" href={repo.svn_url}>{repo.name}</a></h3>
			<div className="repoList">
			<ul className="flex">
				<li className="repoBullet"> <input id="btn1" type="button" name="button" class="colorButton" value="" />{repo.language}</li>
				<li className="repoBullet"> {repo.forks_count} </li>
				<li className="repoBullet">updated at {repo.updated_at} </li>
			</ul>
			</div>
			</div>

			))}
		</div>
		</div>
		)
	}
})



