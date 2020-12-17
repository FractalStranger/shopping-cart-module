import { connect } from 'react-redux';

import Cart from '../components/Cart';

import { changeItemQuantity, removeItem } from '../actions/cart';

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    items: state.cart.items,
    loadingCart: state.cart.loading,
    lang: state.lang,
  };
}

export default connect(mapStateToProps, {
  changeItemQuantity,
  removeItem,
})(Cart);
