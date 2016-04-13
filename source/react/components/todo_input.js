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
		return  <div id="example">
					<input
						type="text"
						placeholder="Type your todo"
						value={this.handleChange.bind(this)}
						onChange={this.state.inputText}
					/>
					<button>Submit</button>
				</div>
	}
}
