import React, {Component} from 'react'

export default class UserInfo extends Component{
	newId(){
		this.props.newId()
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
				</tr>
	}
}
