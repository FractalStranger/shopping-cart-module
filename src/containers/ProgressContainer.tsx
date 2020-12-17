import { connect } from 'react-redux';

import Progress from '../components/Progress';

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    activeStep: state.activeStep,
  };
}

export default connect(mapStateToProps, {
  // fetch,
})(Progress);
