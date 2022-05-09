type RatingProps = {
  handleSubmit: () => void;
  onClick: (e: string) => void;
};

function Rating({ handleSubmit, onClick }: RatingProps) {
  return (
    <div className="rating-state">
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="btn-wrapper">
        <button
          onClick={() => {
            onClick("1");
          }}
          className="button-rating"
        >
          1
        </button>
        <button
          onClick={() => {
            onClick("2");
          }}
          className="button-rating"
        >
          2
        </button>
        <button
          onClick={() => {
            onClick("3");
          }}
          className="button-rating"
        >
          3
        </button>
        <button
          onClick={() => {
            onClick("4");
          }}
          className="button-rating"
        >
          4
        </button>
        <button
          onClick={() => {
            onClick("5");
          }}
          className="button-rating"
        >
          5
        </button>
      </div>
      <button onClick={handleSubmit} className="button-submit">
        Submit
      </button>
    </div>
  );
}

export default Rating;
