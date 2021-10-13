import { memo } from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { ChakraProvider, Modal, ModalOverlay, ModalContent, ModalFooter, Button, ModalBody, Center } from "@chakra-ui/react"
import { Loading } from "../Layout/Layout/LoadingBars";

export const TwitterModal = memo((props) => {
  const { isOpen, onClose, value } = props;
  return (
    <>
      <ChakraProvider>
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <TwitterTweetEmbed key={value?.id} tweetId={value?.id} placeholder={<Center h="300px"><Loading /></Center>} />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  )
});
