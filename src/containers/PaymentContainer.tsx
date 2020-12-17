import { connect } from 'react-redux';

import Payment from '../components/Payment';

import { changePayment } from '../actions/payment';

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    payment: state.payment,
    error: state.orderData.error,
  };
}

export default connect(mapStateToProps, {
  changePayment,
})(Payment);
