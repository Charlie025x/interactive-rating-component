type ThankyouProps = {
  rating: string;
};

export const Thankyou = ({ rating }: ThankyouProps) => {
  return (
    <div className="thankyou-state">
      <p className="your-rating">You selected {rating} out of 5</p>
      {/* Add rating here */}
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
