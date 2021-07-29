import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage-component.jsx";

const HatsPage = (props) => {
	console.log(props);
	return (
		<div>
			<h1>Hats Page id : {props.match.params.hatsid}</h1>
		</div>
	);
};
function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop/hats" component={HatsPage} />
				<Route path="/shop/hats/:hatsid" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
