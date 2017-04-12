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
		<div className="shareDiv">
		<div className="reposit">
		{this.state.repo.map(repo=>(
		<div key={'repo' + repo.id} className="repo">
			<h3><a className="repoTitle" href={repo.svn_url}>{repo.name}</a></h3>
			<div className="repoList">
			<ul>
				<li className="repoBullet1">{repo.language}</li>
				<li className="repoBullet2">{repo.forks_count}</li>
				<li className="repoBullet3">updated at {repo.updated_at}</li>
			</ul>
			</div>
			</div>

			))}
		</div>
		</div>
		)
	}
})

