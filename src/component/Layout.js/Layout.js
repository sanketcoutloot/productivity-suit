import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

import { Navbar } from "../Navbar";
import { Main } from "../Main";
import { Card, CardContent } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

const Layout = ({ children }) => {
  const [isLargerThan420] = useMediaQuery(["(min-width: 425)"]);
  return (
    <Grid
      p={2}
      gap={2}
      justifyContent="center"
      style={{ boxSizing: "border-box", fontFamily: "Comfortaa, cursive" }}
    >
      <GridItem>
        <Card
          style={{
            height: "calc(100vh - 1rem)",
            boxSizing: "border-box",
            width: "425px",
            display: "grid",
          }}
        >
          <CardContent style={{ display: "grid" }}>
            <Main>{children}</Main>
          </CardContent>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default Layout;
