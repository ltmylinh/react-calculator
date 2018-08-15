import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
				<App/>, div);
		ReactDOM.unmountComponentAtNode(div);
});

it('renders a snapshot', () => {
		const tree = renderer
				.create(<App/>)
				.toJSON();
		expect(tree).toMatchSnapshot();
})
