/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Root from './Root';
import App from './components/App';
import CommentBox from './components/CommentBox';
// import CommentList from './components/CommentList';
import NotFound from './components/NotFound';
const rootElement = document.querySelector('#root');
ReactDOM.render(
	<Root>
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<App />
				</Route>
				<Route path='/post' exact>
					<CommentBox />
				</Route>
				{/* <Route path='/' exact>
					<CommentList />
				</Route> */}
				<Route exact path='*'>
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	</Root>,
	rootElement
);
