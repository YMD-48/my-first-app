import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Data from "./Data";


const nextFlow = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/kakunin" component={Data} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default nextFlow;