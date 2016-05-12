import React, {Component} from 'react'
import TodoItem from './todo_item'

export default class TodoList extends Component{
	render(){
		return 	<tbody>
					<tr>
						<td><b>Name:</b></td>
						<td><b>Complete:</b></td>
						<td><b>Delete:</b></td>
					</tr>
					{
						this.props.todos.map((todo, key)=>{
							return <TodoItem
										key={key}
										todo={todo}
										dispatch={this.props.dispatch}
									/>
						})
					}
				</tbody>
	}
}
