import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
// import Header from "home/Header";
const Header = lazy(() => import("home/Header"));
import "./index.scss";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      {showHeader && (
        <Suspense fallback={<p>loading...</p>}>
          <Header />
        </Suspense>
      )}

      <div className="my-10">
        <button
          className="bg-red-700 text-xl text-black"
          onClick={() => {
            setShowHeader((prevState) => !prevState);
          }}
        >
          toggle header
        </button>
        Product Page Content
      </div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
