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
		console.log('has submit button')
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
		// console.log('TEST COMMENTBOX: ', wrapped.find('textarea').prop('value'));
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('when form is submitted, text area gets emptied', () => {
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});

describe('the check box', () => {
	it('has a checkbox with checked prop', () => {
		wrapped.find('input[type="checkbox"]').simulate('change', {
			target: { checked: true }
		});
		wrapped.update();

		expect(wrapped.find('input[type="checkbox"]').prop('checked')).toEqual(
			true
		);
		expect(wrapped.find('button.send').prop('disabled')).toEqual(false);
		wrapped.find('input[type="checkbox"]').simulate('change', {
			target: { checked: false }
		});
		wrapped.update();
		expect(wrapped.find('input[type="checkbox"]').prop('checked')).toEqual(
			false
		);
		expect(wrapped.find('button.send').prop('disabled')).toEqual(true);
	});
});
