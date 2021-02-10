import React from "react";
import { Card } from "ui-neumorphism";

const Main = ({ children }) => {
  return (
    <Card as="main" style={{ alignSelf: "center" }}>
      {children}
    </Card>
  );
};

export default Main;
