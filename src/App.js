import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/dist/base.css';
import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Footer from 'components/footers/MiniCenteredFooter';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/about-us'>
					<About />
				</Route>
				<Route path='/contact-us'>
					<Contact />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
