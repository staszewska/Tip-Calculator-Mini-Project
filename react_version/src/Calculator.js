export function Calculator() {
    

    return (
      <>
        <div className="main-container">
          <section className="container">
            <h1>Tip Calculator</h1>
            <p>Enter the bill amount and tip percantage to calculate the total.</p>
            <form id="tipForm">
              <div className="calculator">
                <label for="bill">Bill amount:</label>
                <input type="text" name="bill" id="bill"></input>

                <label for="tip">Tip percantage:</label>
                <input type="text" name="tip" id="tip"></input>

                <button type="button">Calculate</button>
              </div>
              <div className="sum-container">
                <p className="total">Total:</p>
                <div className="total-sum"></div>
              </div>
            </form>
          </section>
        </div>
      </>
    );
}