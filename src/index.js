/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Root from './Root';
import App from './components/App';
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
				<Route path='/' exact>
					<CommentList />
				</Route>

				<Route path='/'>{/* <NotFound /> */}</Route>
			</Switch>
		</BrowserRouter>
		{/* <App /> */}
	</Root>,
	rootElement
);
