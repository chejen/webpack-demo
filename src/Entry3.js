'use strict';

var React = require('react');
var Alert = require('react-bootstrap/lib/Alert');
var Button = require('react-bootstrap/lib/Button');
var Panel = require('react-bootstrap/lib/Panel');
var Component1 = require('./Component1.js');
var Component2 = require('./Component2.js');

var Entry3 = React.createClass({
	getInitialState() {
		return {
			isCmpOneActive: true
		};
	},
	switchComponent() {
		this.setState({
			isCmpOneActive: !this.state.isCmpOneActive	
		});
	},
	render() {
		return (
			<div>
				<Alert bsStyle="info">
					<h3>Demo 3 - Development Settings</h3>
					<strong>Hot Module Replacement</strong> let us change our code arbitrarily without a page reload.
				</Alert>

				<p>1. Click the button below to switch to Component 2.</p>
				<p>2. Change the content of Component 2 and you will see the browser update the content immediately (with state reserved).</p>
				<Button bsStyle="success" bsSize="small" onClick={this.switchComponent}>
					{"Switch to " + (this.state.isCmpOneActive ? 'Component 2' : 'Component 1')}
				</Button>
				<br/><br/>
				{this.state.isCmpOneActive ? <Component1/> : <Component2/>}
				<br/>

				<Panel header={"Installation"} bsStyle="primary">
					npm install webpack-dev-server --save-dev
					<br/>
					npm install react-hot-loader --save-dev
				</Panel>

				<Panel header={"Webpack Config"} bsStyle="primary">
					webpack.3.dev.js
				</Panel>

				<Panel header={"JS File(s)"} bsStyle="primary">
					src/Entry3.js<br/>
					src/Component1.js<br/>
					src/Component2.js
				</Panel>
			</div>
		);
	}
});

React.render(<Entry3/>, document.getElementById("app"));