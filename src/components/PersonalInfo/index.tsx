import React, { useCallback, useEffect, useRef } from 'react';
import classnames from 'classnames';
import OrderShape from '../../shapes/OrderShape';

import Field from './Field';

import { stepLabels } from '../../constants/steps';
import { getLabel } from './translation';

import {
  validateFields,
  touchAllFieldsPersonalInfo,
  scrollToInvalidFieldsPersonalInfo,
} from '../../utils/fieldsValidation';

type Props = {
  activeStep: number;
  proceed: (step: number) => void;
  personalInfo: OrderShape['personalInfo'];
  changePersonalInfo: (fieldType: string, field: string, value: string | boolean) => void;
  setTouched: (fieldType: string, field: string) => void;
  handleDifferentDeliveryAddress: (checked: boolean) => void;
  savePersonalInfoFieldsRefs: (fieldsRefs: any) => void;
};

function PersonalInfo({
  activeStep,
  proceed,
  personalInfo,
  changePersonalInfo,
  setTouched,
  handleDifferentDeliveryAddress,
  savePersonalInfoFieldsRefs,
}: Props) {
  const fieldsRefs = useRef<any>({});

  const validate = useCallback(() => {
    // show errors
    touchAllFieldsPersonalInfo(personalInfo, setTouched);

    scrollToInvalidFieldsPersonalInfo(personalInfo, fieldsRefs);
  }, [personalInfo, setTouched]);

  const handleSavePersonalInfoFields = useCallback(() => {
    savePersonalInfoFieldsRefs(fieldsRefs);
  }, [savePersonalInfoFieldsRefs, fieldsRefs]);

  useEffect(handleSavePersonalInfoFields, [fieldsRefs]);

  return (
    <div className="shopping-cart-step_personal-info">
      <div className="section-label">
        <span>Personal info</span>
      </div>
      {Object.keys(personalInfo.basic).map((key) => (
        <Field
          key={key}
          personalInfo={personalInfo}
          fieldType="basic"
          fieldName={key}
          fieldLabel={getLabel[key].de}
          changePersonalInfo={changePersonalInfo}
          setTouched={setTouched}
          childRef={(el: any) => {
            fieldsRefs.current[`basic-${key}`] = el;
          }}
        />
      ))}
      <div className="section-label">
        <span>Billing Address</span>
      </div>
      {Object.keys(personalInfo.billingAddress).map((key) => (
        <Field
          key={key}
          personalInfo={personalInfo}
          fieldType="billingAddress"
          fieldName={key}
          fieldLabel={getLabel[key].de}
          changePersonalInfo={changePersonalInfo}
          setTouched={setTouched}
          childRef={(el: any) => {
            fieldsRefs.current[`billingAddress-${key}`] = el;
          }}
        />
      ))}
      <div className="input-wrapper checkbox">
        <input
          type="checkbox"
          checked={personalInfo.differentDeliveryAddress}
          id="differentDeliveryAddress"
          name="differentDeliveryAddress"
          onChange={(e) => handleDifferentDeliveryAddress(e.target.checked)}
        />
        <label htmlFor="differentDeliveryAddress">
          Adresa doručenia je iná ako fakturačná adresa
          <i className="fas fa-check" />
        </label>
      </div>
      {personalInfo.differentDeliveryAddress && (
        <>
          <div className="section-label">
            <span>Delivery Address</span>
          </div>
          {Object.keys(personalInfo.deliveryAddress).map((key) => (
            <Field
              key={key}
              personalInfo={personalInfo}
              fieldType="deliveryAddress"
              fieldName={key}
              fieldLabel={getLabel[key].de}
              changePersonalInfo={changePersonalInfo}
              setTouched={setTouched}
              childRef={(el: any) => {
                fieldsRefs.current[`deliveryAddress-${key}`] = el;
              }}
            />
          ))}
        </>
      )}
      <div className="section-label">
        <span>Celebration info (optional)</span>
      </div>
      {Object.keys(personalInfo.additionalInfo).map((key) => (
        <Field
          key={key}
          personalInfo={personalInfo}
          fieldType="additionalInfo"
          fieldName={key}
          fieldLabel={getLabel[key].de}
          changePersonalInfo={changePersonalInfo}
          setTouched={setTouched}
          childRef={(el: any) => {
            fieldsRefs.current[`additionalInfo-${key}`] = el;
          }}
        />
      ))}
      <div className="section-label">
        <span>Súhlasy</span>
      </div>
      <div
        className={classnames(
          'input-wrapper',
          'checkbox',
          personalInfo.consents.dataProcessing.required &&
            personalInfo.consents.dataProcessing.touched &&
            !personalInfo.consents.dataProcessing.value &&
            'error',
        )}
      >
        <input
          type="checkbox"
          checked={personalInfo.consents.dataProcessing.value}
          id="dataProcessing"
          name="dataProcessing"
          field-type="consents"
          onChange={(e) => changePersonalInfo('consents', e.target.name, e.target.checked)}
          ref={(el: any) => {
            fieldsRefs.current[`consents-dataProcessing`] = el;
          }}
        />
        <label htmlFor="dataProcessing">
          Súhlasím so spracovaním{' '}
          <a href="/gdpr" target="_blank">
            osobných údajov
          </a>
          <i className="fas fa-check" />
        </label>
        {personalInfo.consents.dataProcessing.required && (
          <div className="error-message">
            <span>Consent ist erforderlich</span>
          </div>
        )}
      </div>
      <button
        type="button"
        className="secondary"
        onClick={validateFields(personalInfo) ? () => proceed(activeStep + 1) : validate}
      >
        {stepLabels.next[activeStep - 1].label}
        <i className={stepLabels.next[activeStep - 1].iconClasses} />
      </button>
    </div>
  );
}

export default PersonalInfo;
