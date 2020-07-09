import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import NavBar from "./Navbar";
import RunDashboard from "../dashboard/RunDashboard";
import Home from "../dashboard/Home";

const AppNavigator: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/runs" component={RunDashboard} />
              <Route path="/runs/:id" component={RunDashboard} />
              <Route
                key={location.key}
                path={["/create", "/manage/:id"]}
                component={RunDashboard}
              />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(AppNavigator);
