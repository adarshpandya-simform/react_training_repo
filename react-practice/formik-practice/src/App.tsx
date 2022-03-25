import { AnimateSharedLayout } from "framer-motion";
import { FC } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AuthPageRenderer } from "./pages";
import "./App.css";

const App: FC = () => {
  return (
    <AnimateSharedLayout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Link to="/login">login</Link>
              <Link to="/signup">signup</Link>
            </>
          }
        />
        <Route path="/login" element={<AuthPageRenderer type="login" />} />
        <Route path="/signup" element={<AuthPageRenderer type="signup" />} />
      </Routes>
    </AnimateSharedLayout>
  );
};

export default App;
