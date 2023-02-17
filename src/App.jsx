import React from "react";

const Footer = ({ text }) => <footer> {text} </footer>;

function App() {
  return (
    <div className="app">
      <h1>Feedback App</h1>
      <Footer text={"made with love by theMaskedOtaku"} />
    </div>
  );
}

export default App;
