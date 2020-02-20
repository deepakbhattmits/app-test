/** @format */

import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
	const initialState = {
		comments: ['Comment 1', 'Comment 2']
	};

	wrapped = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

it('creates one LI per comment', () => {
	expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
	// console.log('test one ');
	expect(wrapped.render().text()).toContain('Comment 1');
	expect(wrapped.render().text()).toContain('Comment 2');
});

describe('select button ', () => {
	it('has a checkbox with checked prop when click on button', () => {
		wrapped.find('button.select').simulate('click', {
			target: { checked: true }
		});
		wrapped.update();
		let checkboxes = wrapped
			.find('input[type="checkbox"]')
			.map(el => expect(el.prop('checked')).toEqual(true));

		console.log('TEST : ', checkboxes);
		// wrapped.find('button.select').simulate('change', {
		// 	target: { checked: false }
		// });
		// wrapped.update();
		// wrapped
		// 	.find('input[type="checkbox"]')
		// 	.map(el => expect(el.prop('checked')).toEqual(false));
	});
});
