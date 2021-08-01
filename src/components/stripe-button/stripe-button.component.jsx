import React from "react";
import "./stripe-button.styles.scss";

import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51JJNATSEx5SMwWNNTdMTmiKnnBsp6N45tIleSs01WOGlja0NmpIsKuylCEv7JyGyi2amArOdTua5Q9HiDiycneH100dS46VDJI";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image=""
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
			currency="USD"
		/>
	);
};

export default StripCheckoutButton;
