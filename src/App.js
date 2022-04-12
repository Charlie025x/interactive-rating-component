import "./App.css";

function App() {
  return (
    <div className="card">
      {/* Rating state start */}
      <div class="rating-state">
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div class="btn-wrapper">
          <button class="button-rating">1</button>
          <button class="button-rating">2</button>
          <button class="button-rating">3</button>
          <button class="button-rating">4</button>
          <button class="button-rating">5</button>
        </div>
        <button class="button-submit">Submit</button>
      </div>
      {/* Rating state end */}

      {/* Thank you state start */}
      <div class="thankyou-state">
        <p class="your-rating">You selected X out of 5</p>
        {/* Add rating here */}
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
      {/* Thank you state end */}
    </div>
  );
}

export default App;
