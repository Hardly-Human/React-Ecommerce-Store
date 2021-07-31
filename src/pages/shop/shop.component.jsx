import React from "react";
import "./shop.styles.scss";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
	return (
		<div>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverview}
			/>
			<Route
				exact
				path={`${match.path}/:categoryId`}
				component={CollectionPage}
			/>
		</div>
	);
};

export default ShopPage;
