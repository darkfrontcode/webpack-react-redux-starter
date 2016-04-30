//27:33

import React, {Component} from 'react'
import TodoInput from './todo_input'
import TodoList from './todo_list'

export default class Template extends Component{
	render(){
		return  <section id="template">
					<h1>Todo List</h1>
					<TodoInput/>
					<TodoList/>
				</section>
	}
}
