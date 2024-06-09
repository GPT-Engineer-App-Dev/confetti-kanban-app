import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Link
            as={NavLink}
            to="/"
            px={2}
            py={1}
            rounded="md"
            _hover={{ textDecoration: "none", bg: "brand.700" }}
            _activeLink={{ bg: "brand.900", color: "white" }}
          >
            Home
          </Link>
          <Link
            as={NavLink}
            to="/confetti"
            px={2}
            py={1}
            rounded="md"
            _hover={{ textDecoration: "none", bg: "brand.700" }}
            _activeLink={{ bg: "brand.900", color: "white" }}
          >
            Confetti
          </Link>
          <Link
            as={NavLink}
            to="/kanban"
            px={2}
            py={1}
            rounded="md"
            _hover={{ textDecoration: "none", bg: "brand.700" }}
            _activeLink={{ bg: "brand.900", color: "white" }}
          >
            Kanban
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;