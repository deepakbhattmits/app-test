/** @format */

import React from 'react';
import { mount } from 'enzyme';

import App from '../App';
import Root from '../../Root';

let wrapper;
beforeEach(() => {
	wrapper = mount(
		<Root>
			<App />
		</Root>
	);
});
/*
// it(); // it is a global function(we do not need to import or require it.) It describes the test file we are going to run.
it('show a comment box', () => {
  const div = document.createElement('div'); //creates a JSDOM div inside the terminal

  ReactDOM.render(<App />, div); // render that component in that div element
  // look inside the div and check whether the commentBox is there or not;
  expect(div.innerHTML).toContain('Comment Box')

  ReactDOM.unmountComponentAtNode(div); // revmoves the test object
})
*/
it('show a comment Box', () => {
	expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('show a comment List', () => {
	expect(wrapper.find(CommentList).length).toEqual(1);
});
