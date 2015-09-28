'use strict';

var React = require('react');

var Component1 = React.createClass({
	render() {
		return (
			<div style={{"color":"orange"}}>
				Component 1 is active
			</div>
		);
	}
});

module.exports = Component1;