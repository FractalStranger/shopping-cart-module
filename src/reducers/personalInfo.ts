import {
  CHANGE_PERSONAL_INFO,
  SET_TOUCHED,
  HANDLE_DIFFERENT_DELIVERY_ADDRESS,
} from '../actions/personalInfo';

export const INITIAL_STATE = {
  basic: {
    email: {
      value: '',
      touched: false,
      required: true,
    },
  },
  billingAddress: {
    firstName: {
      value: '',
      touched: false,
      required: true,
    },
    lastName: {
      value: '',
      touched: false,
      required: true,
    },
    street: {
      value: '',
      touched: false,
      required: true,
    },
    street2: {
      value: '',
      touched: false,
      required: false,
    },
    city: {
      value: '',
      touched: false,
      required: true,
    },
    postalCode: {
      value: '',
      touched: false,
      required: true,
    },
  },
  deliveryAddress: {
    firstName: {
      value: '',
      touched: false,
      required: true,
    },
    lastName: {
      value: '',
      touched: false,
      required: true,
    },
    street: {
      value: '',
      touched: false,
      required: true,
    },
    street2: {
      value: '',
      touched: false,
      required: false,
    },
    city: {
      value: '',
      touched: false,
      required: true,
    },
    postalCode: {
      value: '',
      touched: false,
      required: true,
    },
  },
  additionalInfo: {
    eventDate: {
      value: '',
      touched: false,
      required: false,
    },
  },
  consents: {
    dataProcessing: {
      value: false,
      touched: false,
      required: true,
    },
  },
  differentDeliveryAddress: false,
};

const personalInfo = (state: any = INITIAL_STATE, action: any) => {
  const { type, fieldType, field, value, checked } = action;

  switch (type) {
    case CHANGE_PERSONAL_INFO:
      switch (fieldType) {
        case 'basic':
          return {
            ...state,
            basic: {
              ...state.basic,
              [field]: {
                ...state.basic[field],
                value,
              },
            },
          };
        case 'billingAddress':
          return {
            ...state,
            billingAddress: {
              ...state.billingAddress,
              [field]: {
                ...state.billingAddress[field],
                value,
              },
            },
          };
        case 'deliveryAddress':
          return {
            ...state,
            deliveryAddress: {
              ...state.deliveryAddress,
              [field]: {
                ...state.deliveryAddress[field],
                value,
              },
            },
          };
        case 'additionalInfo':
          return {
            ...state,
            additionalInfo: {
              ...state.additionalInfo,
              [field]: {
                ...state.additionalInfo[field],
                value,
              },
            },
          };
        case 'consents':
          return {
            ...state,
            consents: {
              ...state.consents,
              [field]: {
                ...state.consents[field],
                value,
                touched: true,
              },
            },
          };
        default:
          return {
            ...state,
            basic: {
              ...state.basic,
              [field]: {
                ...state.basic[field],
                value,
              },
            },
          };
      }
    case SET_TOUCHED:
      switch (fieldType) {
        case 'basic':
          return {
            ...state,
            basic: {
              ...state.basic,
              [field]: {
                ...state.basic[field],
                touched: true,
              },
            },
          };
        case 'billingAddress':
          return {
            ...state,
            billingAddress: {
              ...state.billingAddress,
              [field]: {
                ...state.billingAddress[field],
                touched: true,
              },
            },
          };
        case 'deliveryAddress':
          return {
            ...state,
            deliveryAddress: {
              ...state.deliveryAddress,
              [field]: {
                ...state.deliveryAddress[field],
                touched: true,
              },
            },
          };
        case 'additionalInfo':
          return {
            ...state,
            additionalInfo: {
              ...state.additionalInfo,
              [field]: {
                ...state.additionalInfo[field],
                touched: true,
              },
            },
          };
        case 'consents':
          return {
            ...state,
            consents: {
              ...state.consents,
              [field]: {
                ...state.consents[field],
                touched: true,
              },
            },
          };
        default:
          return {
            ...state,
            basic: {
              ...state.basic,
              [field]: {
                ...state.basic[field],
                touched: true,
              },
            },
          };
      }
    case HANDLE_DIFFERENT_DELIVERY_ADDRESS:
      return {
        ...state,
        differentDeliveryAddress: checked,
      };
    default:
      return state;
  }
};

export default personalInfo;
