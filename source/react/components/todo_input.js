import React, {Component} from 'react'

export default class TodoInput extends Component{
	constructor(props, context){
		super(props, context)
		this.state = {
			inputText: ''
		}
	}
	handleChange(event){
		this.setState({
			inputText: event.target.value
		})
	}
	render(){
		return  <div id="todo_input" className="clearfix">
					<input
						type="text"
						placeholder="Type your todo"
						value={this.state.inputText}
						onChange={this.handleChange.bind(this)}
					/>
					<button>Submit</button>
				</div>
	}
}
