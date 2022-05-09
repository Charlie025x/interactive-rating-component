import { useState } from "react";
import Rating from "./components/rating.component";
import { Thankyou } from "./components/thankyou.component";

import "./App.css";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState("");

  const handleSubmit = () => {
    // prevents from pressing submit without a rating
    if (rating) {
      setSubmit(true);
    }
  };

  const onClick = (e: string): void => {
    setRating(e);
  };

  return (
    <div className="card">
      {!submit ? (
        <Rating handleSubmit={handleSubmit} onClick={onClick} />
      ) : (
        <Thankyou rating={rating} />
      )}
    </div>
  );
}

export default App;
