import React, { Component } from 'react'
import actions from '../actions/actions'

export default class TodoItem extends Component{
	complete(){
		this.props.dispatch(actions.completeTodo(this.props.todo.id))
	}
	delete(){
		this.props.dispatch(actions.deleteTodo(this.props.todo.id))
	}
	render(){
		return  <li>
                	<span>{this.props.todo.text}</span>
					<button
						className="btn btn-secondary"
						onClick={this.complete.bind(this)}
						>Mark as completed</button>
					<button
						className="btn btn-secondary"
						onClick={this.delete.bind(this)}
					>Delete todo</button>
                </li>
	}
}
