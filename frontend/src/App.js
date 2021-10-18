import axios from "axios";
import { useEffect, useState } from "react";
import { Center, ChakraProvider } from "@chakra-ui/react";

import theme from "./components/Layout/Layout/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Layout/Router";
import { Loading } from "./components/Layout/Layout/LoadingBars";

export default function App() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // axios.get("http://localhost:3000/api/v1/contents")
    axios.get("http://35.76.43.68:3000/api/v1/contents")
      .then((res) => {
        console.log("rails API レスポンス済");
        const dataApi = res.data;
        setAllData(dataApi);
      }).catch((error) => console.log(error))
      .finally(() => { setLoading(false) });
  }, [])
  return (
    <>
      <ChakraProvider theme={theme} >
        {loading ?
          <Center h="100vh">
            <Loading />
          </Center>
          : (
            <BrowserRouter>
              <Router allData={allData} />
            </BrowserRouter>
          )}
      </ChakraProvider>
    </>
  );
};
