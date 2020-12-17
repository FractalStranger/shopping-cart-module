import React from 'react';
// import './App.css';
import './styles.scss';

import Progress from './containers/ProgressContainer';
import StepItems from './containers/StepItemsContainer';
import Summary from './containers/SummaryContainer';

function App() {
  return (
    <div className="shopping-cart-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Progress />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <StepItems />
          </div>
          <div className="col-xl-4 col-lg-5">
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
