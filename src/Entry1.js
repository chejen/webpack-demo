'use strict';

var React = require('react');
var Alert = require('react-bootstrap/lib/Alert');
var Panel = require('react-bootstrap/lib/Panel');

var Entry1 = React.createClass({
	render() {
		return (
			<div>
				<Alert bsStyle="info">
					<h3>Demo 1 - Basic</h3>
					It works well when you see this.
				</Alert>

				<Panel header={"Installation"} bsStyle="primary">
					npm install webpack --save-dev
					<br/>
					npm install babel-loader --save-dev
				</Panel>

				<Panel header={"Webpack Config"} bsStyle="primary">
					webpack.1.basic.js
				</Panel>

				<Panel header={"JS File(s)"} bsStyle="primary">
					src/Entry1.js
				</Panel>
			</div>
		);
	}
});

React.render(<Entry1/>, document.getElementById("app"));