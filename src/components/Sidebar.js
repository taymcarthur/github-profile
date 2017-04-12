import React from 'react';
import {getUser} from '../api/json'
import store from '../api/store/store'
import './main.css'


export default React.createClass({
   getInitialState(){
       return{
           user:[]
       }
   },


   componentWillMount(){
       this.unsubscribe = store.subscribe(()=>{
           const appState = store.getState()
           this.setState({
               user:appState.user,
           })
       })
       getUser()
   },

   componentWillUnmount(){
       this.unsubscribe()
   },

   render(){
       return(
       	<div className="shareDiv">
           <div className="sideBar">
             <img className="tayPic" src={this.state.user.avatar_url} alt={this.state.user.login+'disMe'} height="250" />

             <div className="userName">{this.state.user.name}</div>
             <div className="userLogin">{this.state.user.login}</div>
             <div>{this.state.user.bio}</div>
             <hr/>
             <div className="location">{this.state.user.location}</div>
          <hr/>
             <div><p><strong>Bio:</strong> Fake it till you make it.</p></div>
             </div>
               
           </div>
           

     )
   }
})