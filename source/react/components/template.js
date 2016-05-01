import React, {Component} from 'react'
import TodoInput from './todo_input'
import TodoList from './todo_list'
import {connect} from 'react-redux'

class Template extends Component{
	render(){
		return  <section id="template">
					<h1>Todo List</h1>
					<TodoInput dispatch={this.props.dispatch} />
					<TodoList todos={this.props.todos} />
				</section>
	}
}

function mapStateToProps(state){
	return state
}

export default connect(mapStateToProps)(Template)
