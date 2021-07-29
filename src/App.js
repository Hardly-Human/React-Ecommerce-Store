import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage-component.jsx";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/header/header.component";

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
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SignInAndSignUp} />
			</Switch>
		</div>
	);
}

export default App;
