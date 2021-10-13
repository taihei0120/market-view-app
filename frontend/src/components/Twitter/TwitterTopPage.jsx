import { memo } from "react";
import {
  ChakraProvider, Table, Thead, Tbody, Tr, Th, Td, Button, Image, useDisclosure, Center, Spinner, Box, Flex
} from "@chakra-ui/react";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { useCallback, useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { TwitterModal } from "./TwitterModal";

export const TwitterTopPage = memo((props) => {
  const tweetsAllData = props.tweets || [];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading } = props;
  const [selectTweet, SetSelectTweet] = useState(null);
  const onClickTweet = useCallback((value) => {
    onOpen();
    SetSelectTweet(value);
  }, [SetSelectTweet]);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner
            thickness="7px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <ChakraProvider>
          <Flex height="55px" fontSize="3xl" fontWeight="bold" p={1} ml="3">
            <AiFillTwitterCircle size={40} color="black" />
            <Box ml="3">tweet</Box>
          </Flex>
          <Table w="450px" p={0} m={0} fontSize="sm">
            <Thead height="30px">
              <Tr bg={"blue.400"} >
                <Th p={0} m={0} w="15%" color="black" >DATA</Th>
                <Th p={0} m={0} w="15%" color="black" >PIC.</Th>
                <Th p={0} m={0} w="65%" color="black" >DESCRIPTION</Th>
                <Th p={0} pr={2} m={0} w="15%" color="black" >DETAIL</Th>
              </Tr>
            </Thead>
          </Table>
          <Table w="450px" p={0} m={0} fontSize="sm">
            <Scrollbars style={{ width: 450, height: 680 }}>
              <Tbody>
                {tweetsAllData?.map((value) => (
                  <Tr key={value.id} h="80px">
                    <Td borderBottomColor="gray.700" p={0} m={1} w="15%" fontSize="sm">{value.date.slice(5, 10)}<br />{value.date.slice(11, 16)}</Td>
                    <Td borderBottomColor="gray.700" p={0} m={1} w="15%" ><Image h="40px" w="40px" borderRadius="full" src={value.image} alt="img" /></Td>
                    <Td borderBottomColor="gray.700" p={0} m={1} w="65%" pr={4}>{value.text.slice(0, 90)}...</Td>
                    <Td borderBottomColor="gray.700" p={0} m={1} w="15%" ><Button mr={3} w="50px" fontSize="xs" border="1px solid gray" shadow="md" onClick={() => onClickTweet(value)}>Details</Button></Td>
                  </Tr>
                ))}
              </Tbody>
            </Scrollbars>
          </Table>
          <TwitterModal isOpen={isOpen} onClose={onClose} value={selectTweet} />
        </ChakraProvider>
      )}
    </>
  );
});
