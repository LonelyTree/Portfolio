import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/landing'

class App extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Landing} />
				</Switch>
			</main>
		)
	}
}

export default App
