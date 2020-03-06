import React from "react";
import { Button, Flex, DarkMode } from "@chakra-ui/core";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Flex
      p={4}
      isInline
      justify="center"
      backgroundColor="gray.900"
      borderRadius="md"
      mt={10}
    >
      <Link to="/FAQ/">
        <DarkMode>
          <Button variant="ghost">FAQ</Button>
        </DarkMode>
      </Link>
      <Link to="/Shipping/">
        <DarkMode>
          <Button variant="ghost" mx={4}>
            Shipping
          </Button>
        </DarkMode>
      </Link>
      <Link to="/Contact/">
        <DarkMode>
          <Button variant="ghost">Contact</Button>
        </DarkMode>
      </Link>
    </Flex>
  );
};

export default Footer;