import { useState } from "react";
import Rating from "./components/rating.component";
import { Thankyou } from "./components/thankyou.component";

import "./App.css";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState("");

  const handleSubmit = () => {
    setSubmit(true);
  };

  const onClick = (e) => {
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
