import React, {Component} from 'react'
import TodoInput from './todo_input'

export default class Template extends Component{
	render(){
		return  <section id="template">
					<h1>Todo List</h1>
					<TodoInput/>
				</section>
	}
}
