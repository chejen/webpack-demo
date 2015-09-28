'use strict';

var React = require('react');

var Component2 = React.createClass({
	render() {
		return (
			<div style={{"color":"purple"}}>
				Component 2 is active (change this to see what happens)
			</div>
		);
	}
});

module.exports = Component2;