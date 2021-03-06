/** @format */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';
import MultiHeader from './MultiHeader';

class App extends Component {
	renderButton() {
		if (this.props.auth) {
			return (
				<button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
			);
		} else {
			return (
				<button onClick={() => this.props.changeAuth(true)}>Sign In</button>
			);
		}
	}

	renderHeader() {
		return (
			<>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/post'>Post A Comment.</Link>
					</li>
					<li>{this.renderButton()}</li>
				</ul>
				<CommentList />
				<MultiHeader />
			</>
		);
	}

	render() {
		console.log('TEST APP')
		return (
			<div>
				{this.renderHeader()}
				{/* <CommentBox />
				<CommentList /> */}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
