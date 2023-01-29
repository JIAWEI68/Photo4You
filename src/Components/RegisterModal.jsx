import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const RegisterModal = () => {
  return (
    <ModalOverlay>
      <form onSubmit={onConfirmSubmit}>
        <ModalContent>
          <ModalHeader>Account Created!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Account has been created! We have sent a confirmation code to your
              email.
            </Text>
            <br />
            <Text mb={2}>Please enter the code below:</Text>
            <Input
              type="number"
              value={confirmCode}
              required
              onChange={(e) => setCode(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={closeForm}>
              Close
            </Button>
            <Button
              isLoading={loadingState}
              type="submit"
              variant="solid"
              colorScheme="blue"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </ModalOverlay>
  );
};

export default RegisterModal;
