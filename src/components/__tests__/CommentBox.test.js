/** @format */

import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});
describe('has 2 button and 1 textarea on first render ', () => {
	it('has submit button', () => {
		expect(wrapped.find('.submit').length).toEqual(1);
	});
	it('has fetchComment button', () => {
		expect(wrapped.find('.fetch-comments').length).toEqual(1);
	});
	it('has 1 textarea on page', () => {
		expect(wrapped.find('textarea').length).toEqual(1);
	});
});

describe('the text area', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment' }
		});
		wrapped.update();
	});

	it('has a text area that users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('when form is submitted, text area gets emptied', () => {
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});
