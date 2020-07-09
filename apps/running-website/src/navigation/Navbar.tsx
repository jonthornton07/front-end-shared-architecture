import React from "react";
import { Menu, Container, Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          <Icon name="grav" alt="logo" style={{ marginRight: "10px" }} />
        </Menu.Item>
        <Menu.Item name="Runs" as={NavLink} to="/runs" />
        <Menu.Item>
          <Button as={NavLink} to="/createRun" positive content="Create Run" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
