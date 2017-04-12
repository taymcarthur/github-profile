import axios from 'axios'
import store from './store/store'

export function getUser(){
	axios.get('https://api.github.com/users/taymcarthur').then(user=>{
		store.dispatch({
			type: 'GET_USER',
			user: user.data
		})
	})


}

export function getRepo(){
	axios.get('https://api.github.com/users/taymcarthur/repos').then(repo=>{
		store.dispatch({
			type: 'GET_REPO',
			repo: repo.data
		})

	})
}