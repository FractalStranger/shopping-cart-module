import React, { useCallback, useEffect } from 'react';

import OrderShape from '../../shapes/OrderShape';

import { stepLabels } from '../../constants/steps';

import {
  validateFields,
  touchAllFieldsPersonalInfo,
  scrollToInvalidFieldsPersonalInfo,
} from '../../utils/fieldsValidation';

type Props = {
  activeStep: number;
  proceed: (step: number) => void;
  items: any[];
  loadingCart: boolean;
  loadProductItems: (items: any[], lang: string) => void;
  lang: string;
  personalInfo: OrderShape['personalInfo'];
  payment: string;
  submitOrder: (order: any) => void;
  setTouched: (fieldType: string, field: string) => void;
  fieldsRefs: any;
};

function Summary({
  activeStep,
  proceed,
  items,
  loadingCart,
  loadProductItems,
  lang,
  personalInfo,
  payment,
  submitOrder,
  setTouched,
  fieldsRefs,
}: Props) {
  const subtotal = items
    .map((item) => item.item.price[lang].value * item.quantity)
    .reduce((a, b) => a + b, 0);
  // const vat = subtotal * 0.077;

  const handleValidatePersonalInfo = useCallback(() => {
    // show errors
    touchAllFieldsPersonalInfo(personalInfo, setTouched);

    scrollToInvalidFieldsPersonalInfo(personalInfo, fieldsRefs.personalInfo);
  }, [personalInfo, setTouched, fieldsRefs]);

  const handleSubmitOrder = useCallback(() => {
    const itemList = items.map((item: any) => ({ _id: item.item._id, quantity: item.quantity }));
    const personalInfos = {
      ...personalInfo,
      deliveryAddress: personalInfo.differentDeliveryAddress
        ? personalInfo.deliveryAddress
        : personalInfo.billingAddress,
    };
    submitOrder({ items: itemList, personalInfo: personalInfos, payment, lang });
  }, [items, personalInfo, payment, lang, submitOrder]);

  const handleLoadProductItems = useCallback(() => {
    loadProductItems(items, lang);
  }, [items, lang, loadProductItems]);

  useEffect(handleLoadProductItems, []);

  return (
    <>
      {validateFields(personalInfo)}
      {!!items.length && !loadingCart && (
        <div className="shopping-cart-summary decorated decorated-top-right">
          <div>
            <h3>Summary</h3>
            <p>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Maecenas varius tortor nibh, sit amet tempor nibh finibus et.`}
            </p>
            <div>
              {/* <div className="subtotal">
                <span>Subtotal</span>
                <span className="price">
                  {subtotal} {items[0].item.price[lang].currency}
                </span>
              </div>
              <div className="vat">
                <span>VAT</span>
                <span className="price">
                  {vat} {items[0].item.price[lang].currency}
                </span>
              </div> */}
              <div className="total">
                <span>Total</span>
                <span className="price">
                  {subtotal} {items[0].item.price[lang].currency}
                </span>
              </div>
            </div>
            {activeStep < 3 && (
              <button
                type="button"
                className="secondary"
                onClick={
                  activeStep < 2 || validateFields(personalInfo)
                    ? () => proceed(activeStep + 1)
                    : handleValidatePersonalInfo
                }
              >
                {stepLabels.next[activeStep - 1].label}
                <i className={stepLabels.next[activeStep - 1].iconClasses} />
              </button>
            )}
            {activeStep === 3 && (
              <button
                type="button"
                className="secondary"
                disabled={!validateFields(personalInfo)}
                onClick={validateFields(personalInfo) && payment ? handleSubmitOrder : undefined}
              >
                {stepLabels.next[activeStep - 1].label}
                <i className={stepLabels.next[activeStep - 1].iconClasses} />
              </button>
            )}
            {activeStep > 1 && activeStep < 4 && (
              <button type="button" className="back" onClick={() => proceed(activeStep - 1)}>
                {stepLabels.back[activeStep - 2].label}
                <i className={stepLabels.back[activeStep - 2].iconClasses} />
              </button>
            )}
            {activeStep === 4 && <span>Submitting order...</span>}
          </div>
        </div>
      )}
    </>
  );
}

export default Summary;
