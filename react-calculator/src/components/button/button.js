import React, {Component} from 'react';

class Button extends Component {
		constructor(props) {
				super(props);

				this.handleClick = this
						.handleClick
						.bind(this);
		}

		handleClick() {
				const {label, presson} = this.props;
				this
						.props
						.click(presson, label);
		}

		render() {
				const {className, type, label, presson} = this.props;
				return (
						<button
								className={className}
								type={type}
								presson={presson}
								onClick={this.handleClick}>{label}</button>
				);
		}
}

export default Button;