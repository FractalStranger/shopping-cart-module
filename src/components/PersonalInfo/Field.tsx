import React, { useCallback } from 'react';
import classnames from 'classnames';
import OrderShape from '../../shapes/OrderShape';

type Props = {
  personalInfo: OrderShape['personalInfo'];
  fieldType: string;
  fieldName: string;
  fieldLabel: string;
  changePersonalInfo: (fieldType: string, field: string, value: string) => void;
  setTouched: (fieldType: string, field: string) => void;
  childRef: any;
};

function PersonalInfoField({
  personalInfo,
  fieldType,
  fieldName,
  fieldLabel,
  changePersonalInfo,
  setTouched,
  childRef,
}: Props) {
  const validateField = useCallback(
    (e, fType) => {
      const { name } = e.target;
      setTouched(fType, name);
    },
    [setTouched],
  );

  return (
    <div
      className={classnames(
        'input-wrapper',
        personalInfo[fieldType][fieldName].required &&
          personalInfo[fieldType][fieldName].touched &&
          !personalInfo[fieldType][fieldName].value &&
          'error',
      )}
    >
      <label htmlFor={fieldName}>{fieldLabel}</label>
      <input
        ref={childRef}
        id={fieldName}
        name={fieldName}
        type={fieldName === 'email' ? 'email' : 'text'}
        value={personalInfo[fieldType][fieldName].value}
        onChange={(e) => changePersonalInfo(fieldType, e.target.name, e.target.value)}
        onBlur={(e) => validateField(e, fieldType)}
        placeholder={fieldName === 'street2' ? 'Apartment, suite, unit etc.' : ''}
        field-type={fieldType}
      />
      {personalInfo[fieldType][fieldName].required && (
        <div className="error-message">
          <span>{fieldLabel} ist erforderlich</span>
        </div>
      )}
    </div>
  );
}

export default PersonalInfoField;
