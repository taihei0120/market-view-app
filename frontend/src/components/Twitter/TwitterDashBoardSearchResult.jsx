import { Box, Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { memo } from "react";
import Scrollbars from "react-custom-scrollbars";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { LoadingWatch } from "../Layout/Layout/LoadingWatch";

export const TwitterDashBoardSearchResult = memo((props) => {
  const { isOpen } = props;
  const responseData = props.twitterDataGet.tweets || []

  if (responseData.length === 0) {
    return (<></>)
  } else {
    return (
      <>
        <Box m="0" pl="5" color="gray.800" fontSize="xl">search results...</Box>
        <Wrap bg="gray.400" border="3px solid black" borderRadius="lg" p={2} >
          {responseData.map((value) => (
            <WrapItem key={value.id} isOpen={isOpen} >
              <Box w="480px" h="550px" bg="white" borderRadius="10px" shadow="md" m={1} p={3} _hover={{ cursor: "pointer", opacity: 0.8 }}>
                <Scrollbars>
                  <TwitterTweetEmbed tweetId={value.id} placeholder={<Center h="300px"><LoadingWatch /></Center>} />
                </Scrollbars>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </>
    )
  }
});
