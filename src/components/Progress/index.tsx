import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';

import { stepHeaders } from '../../constants/steps';
import { scrollToRef } from '../../utils';

type Props = {
  activeStep: number;
};

function Progress({ activeStep }: Props) {
  const myRef = useRef(null);
  useEffect(() => {
    scrollToRef(myRef);
  }, [activeStep]);
  return (
    <div className="shopping-cart-ref-container">
      <div className="shopping-cart-main-ref" ref={myRef} />
      {activeStep === 5 ? (
        <h1>
          <i className="fas fa-check-circle" aria-hidden="true" />
          Your order was successful
        </h1>
      ) : (
        <>
          <h1>{stepHeaders[activeStep - 1]}</h1>
          <div className="shopping-cart-step-list">
            <ul>
              {stepHeaders.map((step: string, index: number) => (
                <li
                  key={step}
                  className={classnames(
                    activeStep === index + 1 && 'active',
                    activeStep > index + 1 && 'filled',
                  )}
                >
                  <span className="inner">
                    <span className="value">{index + 1}</span>
                    <span className="text">{step}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Progress;
