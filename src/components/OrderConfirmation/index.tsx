import React from 'react';

type Props = {
  orderData: any;
};

function OrderConfirmation({ orderData }: Props) {
  return (
    <div className="shopping-cart-step_confirmation">
      <h2>Order number: {orderData.orderId}</h2>
      <strong>
        {`Order information has been sent to your email adress: `}
        <u>{orderData.personalInfo.basic.email.value}</u>. Order is being processed. Also check your
        spam folder.
      </strong>
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Maecenas varius tortor nibh, sit amet tempor nibh finibus et. 
      Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. 
      Mauris malesuada nisi sit amet augue accumsan tincidunt. 
      Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros 
      facilisis libero, vitae commodo nunc quam et ligula. Ut nec 
      ipsum sapien. Interdum et malesuada fames ac ante ipsum primis 
      in faucibus. Integer id nisi nec nulla luctus lacinia non eu 
      turpis. Etiam in ex imperdiet justo tincidunt egestas. 
      Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.`}
      </p>
      <a className="button" href="/produkte">
        Produkte ansehen
      </a>
    </div>
  );
}

export default OrderConfirmation;
