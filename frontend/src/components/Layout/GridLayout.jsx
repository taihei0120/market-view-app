import { Wrap, WrapItem, Box } from "@chakra-ui/react";
import { memo } from "react";
import { Header } from "./Layout/Header"
import { NewsTopPage } from "../News/NewsTopPage";
import { ChartTopPage } from "../Chart/ChartTopPage";
import { TwitterTopPage } from "../Twitter/TwitterTopPage";

export const GridLayout = memo((props) => {
  const { allData } = props;
  const fxTime = allData?.fxTime;
  const fxPriceOpen = allData?.fxPriceOpen;
  const contents = allData?.contents;
  const tweets = allData?.tweets;

  if (tweets === undefined) {
    return (<div></div>)
  } else {
    return (
      <>
        <Header />
        <Wrap mt="3" spacing="15px" align="center" justify="center">
          <WrapItem>
            <Box w="480px" h="800px" bg="gray.200" align="center" justify="center" pt={1} borderRadius="10px" shadow="md" border="gray solid 3px">
              <ChartTopPage fxTime={fxTime} fxPriceOpen={fxPriceOpen} />
            </Box>
          </WrapItem>

          <WrapItem>
            <Box w="480px" h="800px" bg="gray.200" align="center" justify="center" p={1} borderRadius="10px" shadow="md" border="gray solid 3px">
              < NewsTopPage contents={contents} />
            </Box>
          </WrapItem>

          <WrapItem>
            <Box w="480px" h="800px" bg="gray.200" align="center" justify="center" p={1} borderRadius="10px" shadow="md" border="gray solid 3px">
              <TwitterTopPage tweets={tweets} />
            </Box>
          </WrapItem>
        </Wrap>
      </>
    )
  }
});
