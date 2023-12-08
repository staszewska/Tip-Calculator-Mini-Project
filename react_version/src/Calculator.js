import React, { useState } from 'react';

export function Calculator() {
    
  const [billValue, setBillValue] = useState('');
  const [tipValue, setTipValue] = useState('');
  const [totalSum, setTotalSum] = useState('');

  const handleInputChange = (event) => {
    setBillValue(event.target.value)
  }

  const handleTipInputChange = (event) => {
    setTipValue(event.target.value)
  }

  const handleButtonClick = () => {
    const result = +billValue + (+billValue * +tipValue) / 100

    setTotalSum(result)

  }



    return (
      <>
        <div className="main-container">
          <section className="container">
            <h1>Tip Calculator</h1>
            <p>Enter the bill amount and tip percantage to calculate the total.</p>
            <form id="tipForm">
              <div className="calculator">
                <label htmlFor="bill">Bill amount:</label>
                <input type="text" name="bill" id="bill" value={billValue} onChange={handleInputChange}></input>

                <label htmlFor="tip">Tip percantage:</label>
                <input type="text" name="tip" id="tip" value={tipValue} onChange={handleTipInputChange}></input>

                <button type="button" onClick={handleButtonClick}>Calculate</button>
              </div>
              <div className="sum-container">
                <p className="total">Total:</p>
                <div className="total-sum">{`$ ${totalSum}`}</div>
              </div>
            </form>
          </section>
        </div>
      </>
    );
}