import React from "react";
import { Container, Segment, Header, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Icon
            size="massive"
            name="grav"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Run Tracker
        </Header>
        <Header as="h2" inverted content="Welcome to Run Tracker!" />
        <Button as={Link} to="/runs" size="huge" inverted>
          Take me to the my runs!
        </Button>
      </Container>
    </Segment>
  );
};

export default Home;
