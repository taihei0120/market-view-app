import { Box } from "@chakra-ui/layout";
import { memo } from "react";
import { Header } from "./Layout/Header";
import { NewsDashBoardPage } from "../News/NewsDashBoardPage"
import { TwitterDashBoardPage } from '../Twitter/TwitterDashBoardPage';
import { ChartSecondPage } from '../Chart/ChartSecondPage';

export const DashBoard = memo((props) => {
  const { allData } = props;
  const newsDataAll = allData.contents || [];
  const tweetsAllData = allData.tweets || [];
  const fxTime = allData.fxTime || [];
  const fxPriceOpen = allData.fxPriceOpen || [];
  const fxPriceHigh = allData.fxPriceHigh || [];
  const fxPriceLow = allData.fxPriceLow || [];
  const fxPriceClose = allData.fxPriceClose || [];

  return (
    <>
      <Header />

      <Box textAlign="center">
        <Box id="chartJump" m="4" pb="4" border="white 1px solid" bg="black" borderRadius="md" align="center" justify="center">
          <ChartSecondPage fxTime={fxTime} fxPriceOpen={fxPriceOpen} fxPriceHigh={fxPriceHigh} fxPriceLow={fxPriceLow} fxPriceClose={fxPriceClose} />
        </Box>

        <Box id="newsJump" m="4" bg="gray.500" borderRadius="md" justifyContent="center">
          <NewsDashBoardPage newsDataAll={newsDataAll} />
        </Box>

        <Box id="tweetJump" m="4" bg="blue.200" align="center" justify="center" pt={2} borderRadius="10px" shadow="md">
          <TwitterDashBoardPage tweetsAllData={tweetsAllData} />
        </Box>
      </Box>
    </>
  )
});
