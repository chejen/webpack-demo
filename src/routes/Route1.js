'use strict';

var React = require('react');

var Route1 = React.createClass({
	render() {
		return (
			<div style={{"color":"red"}}>
				Route 1 is active (Checkout 'Network' tab in developer tools)
			</div>
		);
	}
});

module.exports = Route1;