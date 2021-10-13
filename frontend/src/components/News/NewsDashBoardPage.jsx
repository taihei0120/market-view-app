import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Img } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Flex, Box, Stack, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import axios from "axios";
import { memo, useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { ImNewspaper } from 'react-icons/im';
import { NewsDashBoardSearchResult } from "./NewsDashBoardSearchResult";

export const NewsDashBoardPage = memo((props) => {
  const { newsDataAll } = props;
  const [selectNews, setSelectNews] = useState();
  const openWebSite = (selectNews) => {
    window.open(selectNews);
  };
  const [inputValue, setInputValue] = useState("");
  const searchWord = (e) => setInputValue(e.target.value);
  const [newsDataGet, setNewsDataGet] = useState([]);
  const { isOpen } = useDisclosure;
  const [loading, setLoading] = useState(false);

  const onClickSearch = () => {
    setLoading(true);
    axios.get("http://localhost:3000/api/v1/newsapis", { params: inputValue })
      .then((res) => {
        console.log("axios NEWS API コール");
        const newsApiData = res.data.newsApiData;
        setNewsDataGet(newsApiData);
      }).catch((error) => console.log(error))
      .finally(() => { setLoading(false) });
  };
  return (
    <>
      <Flex height="70px" fontSize="5xl" fontWeight="bold" p={1} ml="4">
        <ImNewspaper size={65} color="black" />
        <Box ml="3">NEWS</Box>
        <Flex m={5} ml={10}>
          <Input focusBorderColor="blue.300" _style={{ color: "black" }} type="text" size="sm" mb={10} w={300} placeholder="please enter a search word" value={inputValue} onChange={searchWord} />
          <Button size="sm" ml={3} bg="gray.700" _style={{ outline: "none" }} _hover={{ bg: "blue.200" }} onClick={onClickSearch}>Search</Button>
        </Flex>

      </Flex>
      <Wrap p={{ base: 3, md: 5 }} justifyContent="center">
        <NewsDashBoardSearchResult isOpen={isOpen} newsDataGet={newsDataGet} loading={loading} />
        {newsDataAll.map((value) => (
          <WrapItem key={value.content}>
            <Box w="480px" h="350px" bg="white" borderRadius="10px" shadow="md" m={1} p={3} _hover={{ cursor: "pointer", opacity: 0.8 }}
              onClick={() => {
                openWebSite(value.url);
                setSelectNews();
              }}>
              <Scrollbars style={{ width: 460, height: 330 }}>
                <Stack textAlign="center">
                  <Text color="black" fontSize="lg" fontWeight="bold">
                    {value.title}
                  </Text>
                  <Box mt={3}>
                    <Img borderRadius="md" objectFit="cover" height={150} width={220} src={value.urlToImage} alt="NEWS" m="auto" />
                  </Box>
                  <Text mt={1} color="black" fontSize="sm">
                    {value.description}
                  </Text>
                </Stack>
              </Scrollbars>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
});
