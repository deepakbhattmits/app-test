/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import PropTypes from 'prop-types';
// import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
	state = {
		name: 123,
		comment: '',
		disabled: false
	};

	handleChange = event => {
		this.setState({ comment: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		if (this.state.comment) {
			this.props.saveComment(this.state.comment);
		}
		this.setState({ comment: '' });
	};

	render() {
		return (
			<div>
				{this.state.name}
				<form onSubmit={this.handleSubmit}>
					<h4>Add a Comment</h4>
					<textarea onChange={this.handleChange} value={this.state.comment} />
					<div>
						<button className='submit'>Submit Comment</button>
					</div>
				</form>
				<input
					type='checkbox'
					checked={this.state.disabled}
					onChange={() => {
						this.setState({ disabled: !this.state.disabled });
					}}
				/>
				<button className='send' disabled={!this.state.disabled}>
					SEND
				</button>

				<button className='fetch-comments' onClick={this.props.fetchComments}>
					Fetch Comments
				</button>
			</div>
		);
	}
}
CommentBox.propTypes = {
	name: PropTypes.string
};

// export default connect(null, actions)(requireAuth(CommentBox));

export default connect(null, actions)(CommentBox);
