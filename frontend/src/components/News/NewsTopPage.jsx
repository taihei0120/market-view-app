import { memo } from "react";
import {
  ChakraProvider, Table, Tbody, Tr, useDisclosure, Spinner,
  Thead, Th, Center, Flex, Box
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { ImNewspaper } from 'react-icons/im';
import { Scrollbars } from 'react-custom-scrollbars';
import { NewsModal } from "./NewsModal"
import { NewTableData } from "./NewsTableData"

export const NewsTopPage = memo((props) => {
  const newsDataAll = props.contents || [];
  const { loading } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectUser, setSelectUser] = useState(null);
  const onClickNews = useCallback((fullData) => {
    onOpen();
    setSelectUser(fullData);
  }, [setSelectUser]);

  return (
    <>
      {loading ?
        <Center h="100vh">
          <Spinner
            thickness="7px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
        : (
          <ChakraProvider>
            <Flex height="55px" fontSize="3xl" fontWeight="bold" p={1} ml="3">
              <ImNewspaper size={40} color="black" />
              <Box ml="3">NEWS</Box>
            </Flex>
            <Table w="450px" p={0} m={0} size="sm">
              <Thead height="30px">
                <Tr bg={"blue.400"} height="10px">
                  <Th p={0} m={1} w="15%" color="black" >DATA</Th>
                  <Th p={0} m={1} w="20%" color="black" >MEDIA</Th>
                  <Th p={0} m={1} w="60%" color="black" >TITLE</Th>
                  <Th p={0} pr={3} m={1} w="15%" color="black" >DETAIL</Th>
                </Tr>
              </Thead>
            </Table>

            <Table w="450px" p={0} m={0} size="sm">
              <Scrollbars style={{ width: 450, height: 680 }}>
                <Tbody>
                  {newsDataAll.map((value) => (
                    <Tr key={value.content} h="80px">
                      <NewTableData
                        publishedAt={value.publishedAt}
                        name={value.name}
                        title={value.title}
                        onClick={onClickNews}
                        fullData={value}
                      />
                    </Tr>
                  ))}
                </Tbody>
              </Scrollbars>
            </Table>

            <NewsModal fullData={selectUser} isOpen={isOpen} onClose={onClose} />
          </ChakraProvider>
        )}
    </>
  );
})
