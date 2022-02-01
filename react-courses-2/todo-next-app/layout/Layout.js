import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

// Layout component to wrap the main component in
// Header and Footer
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
