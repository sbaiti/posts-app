import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/index'
import { history } from './store'

function App() {
  /* hookes */
  useEffect(() => history.push("/posts"), [])
  return (
    <div>
      <Router histoty={history}>
        <div className="container">
          {Routes}
        </div>
      </Router>
    </div>
  );
}

export default App;
