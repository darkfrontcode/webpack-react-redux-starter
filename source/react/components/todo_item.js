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
		return  <tr>
					<td><span>{this.props.todo.text}</span></td>
					<td>
						<a href>
							<i
								className="glyphicon glyphicon-ok"
								aria-hidden="true"
								onClick={this.complete.bind(this)}
							></i>
						</a>
					</td>
					<td>
						<a href>
							<i
								className="glyphicon glyphicon-remove"
								aria-hidden="true"
								onClick={this.delete.bind(this)}
							></i>
						</a>
					</td>
				</tr>
	}
}
