import { Box, Center, Flex, Wrap, WrapItem } from "@chakra-ui/layout";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Loading } from "../Layout/Layout/LoadingBars";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Scrollbars } from 'react-custom-scrollbars';
import { memo, useState } from "react";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/hooks";
import { TwitterDashBoardSearchResult } from "./TwitterDashBoardSearchResult";

export const TwitterDashBoardPage = memo((props) => {
  const { tweetsAllData } = props;
  const [inputValue, setInputValue] = useState("");
  const searchWord = (e) => setInputValue(e.target.value);
  const [twitterDataGet, setTwitterDataGet] = useState([]);
  const { isOpen } = useDisclosure;
  const onClickSearch = () => {
    axios.get("http://localhost:3000/api/v1/twitterapis", { params: inputValue })
      .then((res) => {
        console.log("axios twitter API コール");
        const twitterApiData = res.data;
        setTwitterDataGet(twitterApiData);
      }).catch((error) => console.log(error));
  };
  return (
    <>
      <Flex height="70px" fontSize="5xl" fontWeight="bold" p={1} ml="4">
        <AiFillTwitterCircle size={65} color="black" />
        <Box color="black" ml="3">tweet</Box>
        <Flex m={5} mt={6} ml={10}>
          <Input _style={{ border: "1px black solid" }} color="black" type="text" m="0" mb={10} h="33px" w={300} placeholder="please enter a search word" value={inputValue} onChange={searchWord}></Input>
          <Button size="sm" ml={3} bg="gray.500" _hover={{ bg: "black" }} _style={{ outline: "none" }} onClick={onClickSearch}>Search</Button>
        </Flex>
      </Flex>
      <Wrap p={{ base: 3, md: 5 }} >
        <TwitterDashBoardSearchResult twitterDataGet={twitterDataGet} isOpen={isOpen} />
        {tweetsAllData?.map((value) => (
          <WrapItem key={value.id}>
            <Box w="440px" h="550px" bg="white" borderRadius="10px" shadow="md" m={1} p={3} _hover={{ cursor: "pointer", opacity: 0.8 }}>
              <Scrollbars>
                <TwitterTweetEmbed tweetId={value.id} placeholder={<Center h="300px"><Loading /></Center>} />
              </Scrollbars>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
});
