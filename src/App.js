import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage-component.jsx";
import ShopPage from "./pages/shop/shop.component";

// const HatsPage = (props) => {
// 	console.log(props);
// 	return (
// 		<div>
// 			<h1>Hats Page id : {props.match.params.hatsid}</h1>
// 		</div>
// 	);
// };
function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
