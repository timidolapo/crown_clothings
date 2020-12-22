import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51I1C4bFqaINpdu80nTKaCBMTdq3A9R3CtKLomAUsnmuZUt6Y4Vv6lwTbcbUHhNLxCk9zdxXVOxQswUX0WyXVNqGD00jzd2F8PL';

    const onToken = token =>{
        console.group(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`} 
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;