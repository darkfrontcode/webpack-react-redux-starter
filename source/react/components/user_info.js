import React, {Component} from 'react'

export default class UserInfo extends Component{
	newId(){
		this.props.actions.createNewUserId()
	}
	newIdIfOdd(){
		this.props.actions.createNewUserIdIfOdd()
	}
	newIdAsync(){
		this.props.actions.createNewUserIdAsync()
	}
	render(){
		return  <tr>
					<td><span>username: {this.props.user.username}</span></td>
					<td><span>id: {this.props.user.id}</span></td>
					<td>
						<i
							className="glyphicon glyphicon-random"
							aria-hidden="true"
							onClick={this.newId.bind(this)}
						></i>
					</td>
					<td>
						<i
							className="glyphicon glyphicon-star"
							aria-hidden="true"
							onClick={this.newIdIfOdd.bind(this)}
						></i>
					</td>
					<td>
						<i
							className="glyphicon glyphicon-transfer"
							aria-hidden="true"
							onClick={this.newIdAsync.bind(this)}
						></i>
					</td>
				</tr>
	}
}
