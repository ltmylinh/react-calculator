import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Calculator from './calculator';

it('render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
				<Calculator/>, div);
		ReactDOM.unmountComponentAtNode(div);
});

it('create a calculator snapshot', () => {});
