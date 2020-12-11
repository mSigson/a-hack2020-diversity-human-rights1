import React from "react";
import { useFetchUser, UserProvider } from "../utils/user";
import Layout from "./Layout";

const requireAuthentication = (Component) => {
  const AuthenticatedComponent = (props) => {
    const { user, loading } = useFetchUser();

    const loginErrorMessage = (
      <div>
        Please <a href="/api/login">login</a> in order to view this part of the
        application.
      </div>
    );

    return (
      <div>
        {user === null ? (
          <Layout>Loading...</Layout>
        ) : user ? (
          <UserProvider value={{ user, loading }}>
            <Layout user={user}>
              <Component user={user} {...props} />
            </Layout>
          </UserProvider>
        ) : (
          <Layout>{loginErrorMessage}</Layout>
        )}
      </div>
    );
  };

  return AuthenticatedComponent;
};

export default requireAuthentication;
