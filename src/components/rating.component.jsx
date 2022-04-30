function Rating({ handleSubmit }) {
  return (
    <div class="rating-state">
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div class="btn-wrapper">
        <button class="button-rating">1</button>
        <button class="button-rating">2</button>
        <button class="button-rating">3</button>
        <button class="button-rating">4</button>
        <button class="button-rating">5</button>
      </div>
      <button onClick={handleSubmit} class="button-submit">
        Submit
      </button>
    </div>
  );
}

export default Rating;
