import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/landing'
import Software from './components/software'

class App extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/software" component={Software} />
				</Switch>
			</main>
		)
	}
}

export default App
