/** @format */

import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import Root from 'Root';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
	wrapped = shallow(
		<Root>
			<App />
		</Root>
	);
});
afterEach(() => {
	wrapped.unmount();
});

it('shows a comment box', () => {
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
	expect(wrapped.find(CommentList).length).toEqual(1);
});
