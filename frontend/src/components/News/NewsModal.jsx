import { memo } from "react";
import { ChakraProvider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, Button, ModalBody, Flex, Box } from "@chakra-ui/react";
import { ImNewspaper } from 'react-icons/im';

export const NewsModal = memo((props) => {
  const { isOpen, onClose, fullData } = props;
  const newsUrl = fullData?.url;
  const openWebSite = () => {
    window.open(newsUrl);
  }
  return (
    <>
      <ChakraProvider>
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Flex height="55px" fontSize="3xl" fontWeight="bold" p={1} ml="3">
                <ImNewspaper size={40} color="black" />
                <Box ml="3">NEWS</Box>
              </Flex>
              {fullData?.name}
              {fullData?.title}
            </ModalHeader>
            <ModalBody>
              {fullData?.description}
              <br />
              <Box mt={3}>
                <img height={400} width={400} src={fullData?.urlToImage} alt="img" />
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={openWebSite} variant="ghost">to Website</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
})
