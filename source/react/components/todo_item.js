import React, { Component } from 'react'

export default class TodoItem extends Component{
	complete(){
		this.props.actions.completeTodo(this.props.todo.id)
	}
	delete(){
		this.props.actions.deleteTodo(this.props.todo.id)
	}
	render(){
		return  <tr>
					<td><span>{this.props.todo.text}</span></td>
					<td>
						<i
							className="glyphicon glyphicon-ok"
							aria-hidden="true"
							onClick={this.complete.bind(this)}
						></i>
					</td>
					<td>
						<i
							className="glyphicon glyphicon-remove"
							aria-hidden="true"
							onClick={this.delete.bind(this)}
						></i>
					</td>
				</tr>
	}
}
