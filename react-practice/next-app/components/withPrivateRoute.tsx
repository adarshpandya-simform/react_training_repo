import { NextComponentType, NextPageContext } from "next";
import Router from "next/router";

const checkUserAuth = () => {
  return { auth: true };
};

// HOC component for private routing, takes another component as param
const withPrivateRoute = (WrappedComponent: NextComponentType) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context: NextPageContext) => {
    const userAuth = checkUserAuth();

    // checking auth and redirecting if not authorized
    if (!userAuth.auth) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: "/login",
        });
        context.res?.end();
      } else {
        Router.replace("/login");
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        //   @ts-ignore
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }
    return { userAuth };
  };

  return hocComponent;
};

export default withPrivateRoute;
