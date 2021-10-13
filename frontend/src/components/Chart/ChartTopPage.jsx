import { memo } from "react";
import { useEffect, useRef } from 'react';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { createChart } from 'lightweight-charts';
import { Box, Flex } from "@chakra-ui/react";

export const ChartTopPage = memo((props) => {
  const ref = useRef(null);

  useEffect(() => {
    const { fxTime, fxPriceOpen } = props || [];
    if (fxTime === undefined) {
      return (<div></div>)
    } else {
      const priceDataSet = (fxTime || []).map((time, i) => ({
        time: fxTime[i],
        value: fxPriceOpen[i]
      }))
      const chartCreating = createChart(ref.current, {
        width: 450, height: 730, layout: {
          backgroundColor: '#253248',
          textColor: 'rgba(255, 255, 255, 0.9)',
        }
      });
      const lineSeries = chartCreating.addLineSeries({ color: 'orange' });
      lineSeries.setData(priceDataSet);
    }
  }, [props]);
  return (
    <>
      <Flex height="55px" fontSize="3xl" fontWeight="bold" p={1} ml="3">
        <RiExchangeDollarFill size={40} color="black" />
        <Box ml="3">USD/JPY FX Chart - Daily</Box>
      </Flex>
      <div ref={ref} />
    </>
  );
});
