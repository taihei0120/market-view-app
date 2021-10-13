import { memo } from "react";
import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { Box, Flex } from "@chakra-ui/react";
import { RiExchangeDollarFill } from 'react-icons/ri';

export const ChartSecondPage = memo((props) => {
  const ref = useRef(null);

  useEffect(() => {
    const { fxTime, fxPriceOpen, fxPriceClose, fxPriceHigh, fxPriceLow } = props || [];
    if (fxTime === undefined) {
      return (<div></div>)
    } else {
      const priceDataSet = (fxTime || []).map((time, i) => ({
        time: fxTime[i],
        open: fxPriceOpen[i],
        high: fxPriceHigh[i],
        low: fxPriceLow[i],
        close: fxPriceClose[i]
      }))
      const chartCreating = createChart(ref.current, {
        width: 1400,
        height: 600,
        layout: {
          backgroundColor: '#253248',
          textColor: 'rgba(255, 255, 255, 0.9)',
        },
        grid: {
          vertLines: {
            color: 'rgb(96, 113, 138)',
          },
          horzLines: {
            color: 'rgb(96, 113, 138)',
          },
        },
        crosshair: {
          mode: "CrosshairMode.Normal",
        },
        priceScale: {
          borderColor: '#485c7b',
        },
        timeScale: {
          borderColor: '#485c7b',
        }
      });
      const candleSeries = chartCreating.addCandlestickSeries({
        upColor: '#4bffb5',
        downColor: '#ff4976',
        borderDownColor: '#ff4976',
        borderUpColor: '#4bffb5',
        wickDownColor: '#838ca1',
        wickUpColor: '#838ca1',
      });
      candleSeries.setData(priceDataSet);
    }
  }, [props]);
  return (
    <>
      <Flex height="55px" fontSize="4xl" fontWeight="bold" p={1} ml="3" mb={10}>
        <RiExchangeDollarFill mt={2} size={52} color="white" />
        <Box ml={3} color="white">USD/JPY FX Candle Stick Chart - Daily</Box>
      </Flex>
      <Box mb={10}>
        <div ref={ref} />
      </Box>
    </>
  );
});
