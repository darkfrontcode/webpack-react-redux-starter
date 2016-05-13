// Part 10 - 6:41

import React, {Component} from 'react'
import TodoInput from './todo_input'
import TodoList from './todo_list'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../actions/actions'
import UserInfo from './user_info'
import $ from 'jquery'
import bootstrap from 'bootstrap/dist/css/bootstrap.min'

class App extends Component{
	render(){
		return  <section id="template">
					<div className="page-header">
						<h1 className="text-center">Todo List</h1>
					</div>
					<div className="page-header">
						<table width="100%">
							<tbody>
								<UserInfo
									user={this.props.user}
									actions={this.props.actions}/>
							</tbody>
						</table>
					</div>
					<TodoInput addTodo={this.props.actions.addTodo} />
					<table width="100%" className="table table-striped">
						<TodoList
							todos={this.props.todos}
							actions={this.props.actions}
						/>
					</table>
				</section>
	}
}

function mapStateToProps(state){
	return state
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
