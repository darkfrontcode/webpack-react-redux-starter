// 24:44

import React, {Component} from 'react'
import TodoInput from './todo_input'
import TodoList from './todo_list'
import {connect} from 'react-redux'
import $ from 'jquery'
import bootstrap from 'bootstrap/dist/css/bootstrap.min'

class Template extends Component{
	render(){
		return  <section id="template">
					<div className="page-header">
						<h1 className="text-center">Todo List</h1>
					</div>
					<TodoInput dispatch={this.props.dispatch} />
					<table width="100%" className="table table-striped">
						<TodoList
							todos={this.props.todos}
							dispatch={this.props.dispatch}
						/>
					</table>
				</section>
	}
}

function mapStateToProps(state){
	return state
}

export default connect(mapStateToProps)(Template)
