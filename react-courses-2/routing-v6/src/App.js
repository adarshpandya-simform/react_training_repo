import { Routes, Route } from "react-router-dom";
import { Home } from "./components";
import { lazy, Suspense } from "react";

const TodoContainer = lazy(() =>
  import("./components/TodoContainer/TodoContainer")
);
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const TodoLayout = lazy(() => import("./pages/TodoLayout"));

// App component with lazy loading,suspense and fallback
const App = () => {
  return (
    // suspense with fallback
    <Suspense fallback={<p>loading...</p>}>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<TodoLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route
              path="/contact/email"
              element={<p>email: ap@simformsolutions.com</p>}
            />
            <Route
              path="/contact/phone"
              element={<p>phone: +91 - 9283940404</p>}
            />
          </Route>
          <Route path="/todos" element={<TodoContainer />} />
          {/* adding 404 route */}
          <Route path="*" element={<p>404 not found</p>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
