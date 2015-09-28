'use strict';

var React = require('react');
var Alert = require('react-bootstrap/lib/Alert');
var Panel = require('react-bootstrap/lib/Panel');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var Route1;
var Route2;

var Entry2 = React.createClass({
	getInitialState: function() {
		return {
			switch: true
		};
	},
	render() {
		return (
			<div>
				<Alert bsStyle="info">
					<h3>Demo 2 - Lazy Load</h3>
					<p>This sample will generate 3 output files: <strong>demo2.js, 1.demo2.js and 2.demo2.js.</strong></p>
					<p>Only <strong>demo2.js</strong> will be downloaded when index2.html is running.</p>
					<p><strong>1.demo2.js</strong> and <strong>2.demo2.js</strong> will be downloaded respectively when index2.html#/route1 and index2.html#/route2 are running.</p>
				</Alert>

				<p>Open <b>developer tools</b> of your browser and switch to 'Network' tab.</p>
				<p>Click the hyperlink below and see what happens.</p>
				<ul>
					<li key='1'><Link to='/route1'>Route 1</Link></li>
					<li key='2'><Link to='/route2'>Route 2</Link></li>
				</ul>
				{this.props.children}
				<br/>

				<Panel header={"Installation"} bsStyle="primary">
					npm install react-router-proxy-loader --save
				</Panel>

				<Panel header={"Webpack Config"} bsStyle="primary">
					webpack.2.lazyLoad.js
				</Panel>

				<Panel header={"JS File(s)"} bsStyle="primary">
					src/Entry2.js<br/>
					src/routes/Route1.js<br/>
					src/routes/Route2.js
				</Panel>
			</div>
		);
	}
});

if (process.env.LAZY_LOAD) {
	Route1 = require('react-router-proxy!./routes/Route1.js');
	Route2 = require('react-router-proxy!./routes/Route2.js');
} else {
	Route1 = require('./routes/Route1.js');
	Route2 = require('./routes/Route2.js');
}

React.render((
	<Router>
		<Route path="/" component={Entry2}>
			<Route path="route1" component={Route1}/>
			<Route path="route2" component={Route2}/>
		</Route>
	</Router>
), document.getElementById("app"));