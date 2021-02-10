import React from "react";
import { Button, Card, CardContent, H5, Subtitle2 } from "ui-neumorphism";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <Card bordered outlined>
      <CardContent>
        <H5>This is AUTH page.</H5>
        <Subtitle2>Our designer haven't designed it. </Subtitle2>
        <Button>
          <Link to="/todo">Check ToDo</Link>{" "}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Auth;
