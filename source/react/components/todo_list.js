import React, {Component} from 'react'
import TodoItem from './todo_item'

export default class TodoList extends Component{
	render(){
		return <ul className="clearfix">
					{
						this.props.todos.map((todo, key)=>{
							return <TodoItem
										key={key}
										todo={todo}
										dispatch={this.props.dispatch}
									/>
						})
					}
				</ul>
	}
}
