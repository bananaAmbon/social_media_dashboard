import React from 'react';

function App(props) {
  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Placeholder Dashboard</h1>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}

export default App;
