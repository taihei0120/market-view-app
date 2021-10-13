import { Wrap, WrapItem, Box, Stack, Text, Center } from "@chakra-ui/react";
import { Img } from "@chakra-ui/image";
import { Progress } from "@chakra-ui/react";
import { Scrollbars } from 'react-custom-scrollbars';
import { memo, useState } from "react";

export const NewsDashBoardSearchResult = memo((props) => {
  const { isOpen } = props;
  const { newsDataGet } = props;
  const { loading } = props;
  const responseData = props.newsDataGet || [];
  const [selectNews, setSelectNews] = useState();
  const openWebSite = (selectNews) => {
    window.open(selectNews);
  };

  if (newsDataGet.length === 0 && loading === false) {
    return (<></>)
  } else if (loading === true) {
    return (
      <>
        <Box h="100px" w="100%" ><Center><Progress w="60%" mt="10" size="lg" isIndeterminate /></Center></Box>
      </>)
  } else {
    return (
      <>
        <Box m="0" pl="5" fontSize="xl">search results...</Box>
        <Wrap border="1px white solid" borderRadius="lg" p={2} bg="black">
          {responseData.map((value) => (
            <WrapItem isOpen={isOpen} key={value.content}>
              <Box w="480px" h="350px" bg="white" borderRadius="10px" shadow="md" m={1} p={3} _hover={{ cursor: "pointer", opacity: 0.8 }} onClick={() => {
                openWebSite(value.url);
                setSelectNews()
              }}>
                <Scrollbars style={{ width: 460, height: 330 }}>
                  <Stack textAlign="center">
                    <Text color="black" fontSize="lg" fontWeight="bold">
                      {value.title}
                    </Text>
                    <Box mt={3}>
                      <Img borderRadius="md" objectFit="cover" height={150} width={220} src={value.urlToImage} alt="NEWS" m="auto" />
                    </Box>
                    <Text color="black" fontSize="sm">
                      {value.description}
                    </Text>
                  </Stack>
                </Scrollbars>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </>
    );
  }
});
