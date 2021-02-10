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
import { Card } from "ui-neumorphism";
const Layout = ({ children }) => {
  const [isLargerThan420] = useMediaQuery(["(min-width: 425)"]);
  return (
    <Grid
      p={2}
      gap={2}
      justifyContent="center"
      style={{ boxSizing: "border-box", fontFamily: "Comfortaa, cursive" }}
    >
      {/* side navigation  */}

      {/* main content */}

      <GridItem
        bg="rgba(245,245,245,1)"
        boxShadow="lg"
        width="425px"
        p={4}
        rounded="lg"
        style={{ height: "calc(100vh - 1rem)", boxSizing: "border-box" }}
      >
        {/* <Main>{children}</Main> */}
        <Card elevation={2} width={100} height={100}>
          2
        </Card>
        <Card elevation={2} width={100} height={100}>
          3
        </Card>
        <Center
          margin={3}
          color="white"
          style={{
            borderRadius: "50px",
            background: "#872ab2",
            boxShadow: "20px 20px 60px #bebebe,-20px -20px 60px #ffffff",
          }}
          height={200}
          width={200}
        >
          <Button
            color="white"
            style={{
              borderRadius: "20px",
              background: "#872ab2",
              boxShadow:
                "inset  8px 8px 16px #732497,inset -8px -8px 16px #9b30cd",
            }}
          >
            Button
          </Button>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default Layout;
