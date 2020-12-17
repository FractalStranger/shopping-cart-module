interface OrderShape {
  cart: {
    items: {}[];
  };
  personalInfo: {
    [key: string]: any;
    basic: {
      [key: string]: any;
      email: {
        value: string;
        touched: boolean;
        required: boolean;
      };
    };
    billingAddress: {
      [key: string]: any;
      firstName: {
        value: string;
        touched: boolean;
        required: boolean;
      };
      lastName: {
        value: string;
        touched: boolean;
        required: boolean;
      };
      street: {
        value: string;
        touched: boolean;
        required: boolean;
      };
      street2: {
        value: string;
        touched: boolean;
        required: boolean;
      };
      city: {
        value: string;
        touched: boolean;
        required: boolean;
      };
      postalCode: {
        value: string;
        touched: boolean;
        required: boolean;
      };
    };
    deliveryAddress: {
      [key: string]: any;
      firstName: {
        value: string;
        touched: boolean;
        required: boolean;
      };
      lastName: {
        value: string;
        touched: boolean;
        required: boolean;
      };
      street: {
        value: string;
        touched: boolean;
        required: boolean;
      };
      street2: {
        value: string;
        touched: boolean;
        required: boolean;
      };
      city: {
        value: string;
        touched: boolean;
        required: boolean;
      };
      postalCode: {
        value: string;
        touched: boolean;
        required: boolean;
      };
    };
    additionalInfo: {
      [key: string]: any;
      eventDate: {
        value: string;
        touched: boolean;
        required: boolean;
      };
    };
    differentDeliveryAddress: boolean;
  };
  payment: string;
  lang: string;
}

export default OrderShape;
