import React, {Component} from 'react'

export default class TodoList extends Component{
	render(){
		return <ul className="clearfix">
					{this.props.todos.map((todo, key)=>{
						return <li key={todo.id}>{todo.text}</li>
					})}
				</ul>
	}
}
