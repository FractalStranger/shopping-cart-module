import { connect } from 'react-redux';

import Summary from '../components/Summary';
import { proceed, submitOrder } from '../actions';
import { loadProductItems } from '../actions/cart';

import { setTouched } from '../actions/personalInfo';

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    activeStep: state.activeStep,
    items: state.cart.items,
    loadingCart: state.cart.loading,
    lang: state.lang,
    personalInfo: state.personalInfo,
    payment: state.payment,
    fieldsRefs: state.fieldsRefs,
  };
}

export default connect(mapStateToProps, {
  proceed,
  submitOrder,
  setTouched,
  loadProductItems,
})(Summary);
