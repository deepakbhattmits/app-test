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
		// console.log('new comment : ', wrapped.find('textarea').prop('value'));
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('when form is submitted, text area gets emptied', () => {
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});

describe('the check box', () => {
	beforeEach(() => {
		// console.log('CHECKBOX : ', wrapped.find('input[type="checkbox"]'));
		wrapped.find('input[type="checkbox"]').simulate('change', {
			target: { checked: true }
		});
		wrapped.update();
	});
	it('has a checkbox with ', () => {
		console.log(
			'OLD CHECKBOX : ',
			wrapped.find('input[type="checkbox"]').prop('checked')
		);
		console.log(
			'NEW CHECKBOX : ',
			wrapped.find('input[type="checkbox"]').prop('checked')
		);
		// console.log('Disabled : ', wrapped.find('button.send'));
		// expect(wrapped.find('input[type="checkbox"]')).toEqual(true);
	});
});
