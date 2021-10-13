import { useHistory, useLocation } from "react-router-dom";
import { Flex, Heading, Link, Box, Spacer } from "@chakra-ui/react";
import { Link as Scroll } from 'react-scroll';
import { useCallback } from "react";

export const Header = () => {
  const history = useHistory();
  const onClickTopPage = useCallback(() => history.push("/"), [history]);
  const onClickDashBoard = useCallback(() => history.push("/dashboard"), [history]);

  return (
    <>
      <Flex
        as="nav"
        width="100%"
        bg="gray.800"
        color="gray.50"
        border="teal"
        align="center"
        height={{ base: "10", md: "14" }}
        padding={{ base: "4", md: "6" }}
        position="fixed"
        display="flex"
        zIndex={10}
      >
        <Flex _hover={{ cursor: "pointer" }} onClick={onClickTopPage} >
          <Heading as="a" fontSize={{ base: "xl", md: "3xl" }} >Top Page</Heading>
        </Flex>
        <Flex onClick={onClickDashBoard}>
          <Link fontSize={{ base: "lg", md: "2xl" }} p="1" ml="10" color="gray.300" style={{ textDecoration: 'none' }}>Dashboard</Link>
        </Flex>
        <Spacer />

        {(useLocation().pathname === "/dashboard") ?
          <>
            <Box color="gray.400" mr={4}>scroll to...</Box>
            <Flex>
              <Flex fontWeight="bold" _hover={{ cursor: "pointer", opacity: 0.8 }}>
                <nav>
                  <Scroll to="chartJump" smooth={true} offset={-50} >
                    Chart
                  </Scroll>
                </nav>
              </Flex>
              <Box ml={3}></Box>
              <Flex fontWeight="bold" _hover={{ cursor: "pointer", opacity: 0.8 }}>
                <nav>
                  <Scroll to="newsJump" smooth={true} offset={-50} >
                    News
                  </Scroll>
                </nav>
              </Flex>
              <Box ml={3}></Box>
              <Flex fontWeight="bold" _hover={{ cursor: "pointer", opacity: 0.8 }}>
                <nav>
                  <Scroll to="tweetJump" smooth={true} offset={-50} >
                    tweet
                  </Scroll>
                </nav>
              </Flex>
            </Flex>
          </>
          : (<></>)}

      </Flex>
      <Box width="100%" height={{ base: "10", md: "14" }} zIndex={10}></Box>
    </>
  )
};
