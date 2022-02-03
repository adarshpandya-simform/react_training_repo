import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Layout component for wrapping around main component
// to provide consistent layout
const Layout = ({ children }) => {
  return (
    <div className="todo-layout-container">
      <div className="todo-header">
        <Header />
      </div>
      <div className="todo-content">{children}</div>
      <div className="todo-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
