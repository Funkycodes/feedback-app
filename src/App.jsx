import React from "react";
import FeedbackItem from "./components/feedback-item/FeedbackItem";
import Header from "./components/header/Header";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="app">
        <FeedbackItem />
      </div>
    </Fragment>
  );
}

export default App;
