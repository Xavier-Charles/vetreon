import React from "react";

import ComingSoon from "react-coming-soon";
import bgImage from "./assets/images/comming-soon.jpg"
import "./App.css";

function App() {
  return (
    <ComingSoon
      image={bgImage}
      bgColor="#fff"
      textColor="#fff"
      title="Coming Soon..."
    />
  );
}

export default App;
