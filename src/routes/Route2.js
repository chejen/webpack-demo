'use strict';

var React = require('react');

var Route2 = React.createClass({
	render() {
		return (
			<div style={{"color":"green"}}>
				Route 2 is active (Checkout 'Network' tab in developer tools)
			</div>
		);
	}
});

module.exports = Route2;