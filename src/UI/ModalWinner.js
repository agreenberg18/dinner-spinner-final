import { useEffect } from "react";

function Winner({ modal, setModal, winner }) {
  //const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (modal) {
      document.getElementById("btn").click();
      console.log("winner in winner");
      setModal(false);
    }
  }, [modal, setModal]);

  return (
    <>
      test
      {/* <button
        style={{ display: "none" }}
        id="btn"
        type="hidden"
        onClick={onOpen}
      >
        Trigger modal
      </button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>We have a winner!</ModalHeader>
          <ModalCloseButton />
          {winner.name ? (
            <ModalBody>
              <Link color="teal.500" href={winner.url} isExternal>
                {winner.name}
              </Link>
            </ModalBody>
          ) : (
            <ModalBody>
              <p>Error</p>
            </ModalBody>
          )}
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
}

export default Winner;
