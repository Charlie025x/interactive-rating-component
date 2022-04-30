export const Thankyou = ({ rating }) => {
  return (
    <div class="thankyou-state">
      <p class="your-rating">You selected X out of 5</p>
      {/* Add rating here */}
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
