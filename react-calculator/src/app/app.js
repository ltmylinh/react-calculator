import React, {Component} from 'react';
import logo from './../assets/images/logo.svg';
import './app.css';
import Button from './../components/button/button';

class App extends Component {
		constructor(props) {
				super(props);
				this.state = {
						result: 0,
						firstNumber: null,
						operator: null,
						lastNumber: null,
						isCalculating: false
				};

				this.handleClick = this
						.handleClick
						.bind(this);
		};

		handleClick(presson, label) {
				const {firstNumber, operator, lastNumber, isCalculating} = this.state;
				switch (presson) {
						case "clear":
								this.reset();
								break;
						case "number":
								if (!isCalculating) {
										let value = firstNumber
												? `${firstNumber}${label}`
												: label;
										this.setFirstNumber(value);
								} else {
										if (operator) {
												let value = lastNumber
														? `${lastNumber}${label}`
														: label;
												this.setState({
														...this.state,
														lastNumber: value
												});
										} else {
												let value = firstNumber
														? `${firstNumber}${label}`
														: label;
												this.setFirstNumber(value);
										}
								}
								break;
						case "caculate":
								isCalculating && this.setState({
										...this.state,
										operator: label
								});
								break;
						case "equal":
								if (isCalculating && firstNumber && lastNumber && operator) {
										let result = this.calculate();
										this.setState({
												...this.state,
												result,
												firstNumber: null,
												operator: null,
												lastNumber: null,
												isCalculating: false
										});
								}
								break;
						default:
								this.reset();
								break;
				}
		}

		reset() {
				this.setState({
						...this.state,
						result: 0,
						firstNumber: null,
						operator: null,
						lastNumber: null,
						isCalculating: false
				});
		}

		setFirstNumber(value) {
				this.setState({
						...this.state,
						firstNumber: value,
						result: parseInt(value),
						isCalculating: true
				});
		}

		calculate() {
				const {result, firstNumber, operator, lastNumber} = this.state;
				let iFirstNumber = parseInt(firstNumber),
						iLastNumber = parseInt(lastNumber),
						fResult = result;
				switch (operator) {
						case '+':
								fResult = iFirstNumber + iLastNumber;
								break;
						case '-':
								fResult = iFirstNumber - iLastNumber;
								break;
						case 'x':
								fResult = iFirstNumber * iLastNumber;
								break;
						case '/':
								fResult = iFirstNumber / iLastNumber;
								break;
						default:
								break;
				}
				return fResult;
		}

		render() {
				const {result} = this.state;
				return (
						<div className="calculator-app">
								<header className="calculator-app-header">
										<img src={logo} className="calculator-app-logo" alt="logo"/>
										<h1 className="calculator-app-title">React Calculator</h1>
								</header>
								<div className="calculator-app-content">
										<div className="main-content">
												<ul>
														<li>
																<input type="text" className="cal-result" value={result} readOnly/>
														</li>
														<li className="divide">
																<Button
																		className="keys-clear"
																		type="button"
																		label="Clear"
																		click={this.handleClick}
																		presson="clear"/>
																<Button
																		className="keys-cals"
																		type="button"
																		label="/"
																		click={this.handleClick}
																		presson="caculate"/>
														</li>
														<li className="subtract">
																<Button
																		className="keys-number"
																		type="button"
																		label="7"
																		click={this.handleClick}
																		presson="number"/>
																<Button
																		className="keys-number"
																		type="button"
																		label="8"
																		click={this.handleClick}
																		presson="number"/>
																<Button
																		className="keys-number"
																		type="button"
																		label="9"
																		click={this.handleClick}
																		presson="number"/>
																<Button
																		className="keys-cals"
																		type="button"
																		label="-"
																		click={this.handleClick}
																		presson="caculate"/>
														</li>
														<li className="add">
																<Button
																		className="keys-number"
																		type="button"
																		label="4"
																		click={this.handleClick}
																		presson="number"/>
																<Button
																		className="keys-number"
																		type="button"
																		label="5"
																		click={this.handleClick}
																		presson="number"/>
																<Button
																		className="keys-number"
																		type="button"
																		label="6"
																		click={this.handleClick}
																		presson="number"/>
																<Button
																		className="keys-cals"
																		type="button"
																		label="+"
																		click={this.handleClick}
																		presson="caculate"/>
														</li>
														<li className="equal">
																<Button
																		className="keys-number"
																		type="button"
																		label="1"
																		click={this.handleClick}
																		presson="number"/>
																<Button
																		className="keys-number"
																		type="button"
																		label="2"
																		click={this.handleClick}
																		presson="number"/>
																<Button
																		className="keys-number"
																		type="button"
																		label="3"
																		click={this.handleClick}
																		presson="number"/>
																<Button
																		className="keys-cals"
																		type="button"
																		label="="
																		click={this.handleClick}
																		presson="equal"/>
														</li>
												</ul>
										</div>
								</div>
						</div>
				);
		};
}

export default App;