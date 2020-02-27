/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
	state = {
		checked: false,
		checkbox: [1, 2, 3, 4, 5]
	};
	renderComments() {
		return this.props.comments.map(comment => {
			return <li key={comment}>{comment}</li>;
		});
	}
	handleSelect = () => {
		this.setState({ checked: !this.state.checked });
	};

	render() {
		console.log('TEST COMMENT LIST');
		return (
			<div>
				<h4>Comment List</h4>
				<ul>{this.renderComments()}</ul>

				<button className='select' onClick={this.handleSelect}>
					Select All
				</button>
				{this.state.checkbox.map(el => {
					return (
						<input
							id={el}
							key={el}
							type='checkbox'
							checked={this.state.checked}
							onChange={() => {
								this.setState({ checked: !this.state.checked });
							}}
						/>
					);
				})}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
