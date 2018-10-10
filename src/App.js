import React, { Component } from 'react';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

	renderContent = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return <Route
					key={index}
					path={route.path}
					exact={route.exact}
					render={route.main}
				/>
			});
		}
		return result;
	}

	render() {
		return (
			<Router>
				<Switch>
					{this.renderContent(routes)}
				</Switch>
			</Router>
		);
	}
}

export default App;
