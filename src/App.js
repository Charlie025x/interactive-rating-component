import { useState } from "react";
import Rating from "./components/rating.component";
import { Thankyou } from "./components/thankyou.component";

import "./App.css";

function App() {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <div className="card">
      {!submit ? <Rating handleSubmit={handleSubmit} /> : <Thankyou />}
    </div>
  );
}

export default App;
