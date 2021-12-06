import React, { useState } from 'react';
import './main.css';
function Main() {
  const [bool, setBool] = useState(true);
  function click() {
    setBool(false);
    if (bool === false) {
      setBool(true);
    }
    return bool;
  }
  return (
    <>
      <div className="container">
        <p>NAFIS</p>
        <div className="links">
          <p className="p">hellow</p>
          <p className="p">hellow</p>
          <div className="clickEvents">
            <div className="details p" onClick={click}>
              click me!
            </div>
            <div className="ni">
              <div className={bool === false ? 'display' : 'display1'}>
                <button>click me!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
