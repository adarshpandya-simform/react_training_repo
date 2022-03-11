import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import PDPContent from "./components/PDPContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";

const App = () => {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <div className="my-10">
          <Routes>
            <Route path="/product/:id" element={<PDPContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
