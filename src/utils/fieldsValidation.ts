/* eslint-disable no-restricted-syntax */
import OrderShape from '../shapes/OrderShape';

export function validateFields(personalInfo: OrderShape['personalInfo']) {
  const basicError = Object.keys(personalInfo.basic).filter((key) => {
    return personalInfo.basic[key].required && !personalInfo.basic[key].value;
  }).length;
  const billingAddressError = Object.keys(personalInfo.billingAddress).filter((key) => {
    return personalInfo.billingAddress[key].required && !personalInfo.billingAddress[key].value;
  }).length;
  const deliveryAddressError = Object.keys(personalInfo.deliveryAddress).filter((key) => {
    return personalInfo.deliveryAddress[key].required && !personalInfo.deliveryAddress[key].value;
  }).length;
  const additionalInfoError = Object.keys(personalInfo.additionalInfo).filter((key) => {
    return personalInfo.additionalInfo[key].required && !personalInfo.additionalInfo[key].value;
  }).length;
  const consentsAcceptedError = Object.keys(personalInfo.consents).filter((key) => {
    return personalInfo.consents[key].required && !personalInfo.consents[key].value;
  }).length;

  const requiredFulfilled =
    !basicError &&
    !billingAddressError &&
    (!personalInfo.differentDeliveryAddress || !deliveryAddressError) &&
    !additionalInfoError &&
    !consentsAcceptedError;
  return requiredFulfilled;
}

export function touchAllFieldsPersonalInfo(
  personalInfo: OrderShape['personalInfo'],
  setTouched: (fieldType: string, field: string) => void,
) {
  Object.keys(personalInfo.basic).forEach((key) => setTouched('basic', key));
  Object.keys(personalInfo.billingAddress).forEach((key) => setTouched('billingAddress', key));
  if (personalInfo.differentDeliveryAddress) {
    Object.keys(personalInfo.deliveryAddress).forEach((key) => setTouched('deliveryAddress', key));
  }
  Object.keys(personalInfo.additionalInfo).forEach((key) => setTouched('additionalInfo', key));
  Object.keys(personalInfo.consents).forEach((key) => setTouched('consents', key));
}

export function scrollToInvalidFieldsPersonalInfo(
  personalInfo: OrderShape['personalInfo'],
  fieldsRefs: any,
) {
  for (const key of Object.keys(fieldsRefs.current)) {
    const fieldType = fieldsRefs.current[key].getAttribute('field-type');
    const fieldName = fieldsRefs.current[key].name;
    const field = personalInfo[fieldType][fieldName];
    if (!personalInfo.differentDeliveryAddress && fieldType === 'deliveryAddress') continue;
    if (field.required && !field.value) {
      fieldsRefs.current[key]
        .closest('.input-wrapper')
        .scrollIntoView({ behavior: 'smooth', block: 'center' });
      break;
    }
  }
}
