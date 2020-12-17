import React from 'react';

import Cart from '../../containers/CartContainer';
import PersonalInfo from '../../containers/PersonalInfoContainer';
import Payment from '../../containers/PaymentContainer';
import OrderConfirmation from '../../containers/OrderConfirmationContainer';

type Props = {
  activeStep: number;
};

function StepItems({ activeStep }: Props) {
  return (
    <div className="shopping-cart-step">
      {activeStep === 1 && <Cart />}
      {activeStep === 2 && <PersonalInfo />}
      {activeStep === 3 && <Payment />}
      {activeStep === 4 && <Payment />}
      {activeStep === 5 && <OrderConfirmation />}
    </div>
  );
}

export default StepItems;
