import React from "react";
import "./shop.styles.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ collections }) => {
	return (
		<div>
			<CollectionsOverview />
		</div>
	);
};

export default ShopPage;
