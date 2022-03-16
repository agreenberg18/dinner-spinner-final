import saly from "../assets/saly.png";
import { useEffect } from "react";
import { Grid, GridItem, Center } from "@chakra-ui/react";

import TagManager from "react-gtm-module";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Link,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

function Winner({ modal, setModal, winner }) {
  const tagManagerArgs = {
    gtmId: "GTM-NMKSMHQ",
  };
  TagManager.initialize(tagManagerArgs);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (modal) {
      document.getElementById("btn").click();
      setModal(false);

      window.dataLayer.push({
        event: "winner",
        restaurantData: {
          winnerName: winner.name,
          winnURL: winner.url,
        },
      });
    }
  }, [modal, setModal]);

  return (
    <>
      <button
        style={{ display: "none" }}
        id="btn"
        type="hidden"
        onClick={onOpen}
      >
        Trigger modal
      </button>

      <Modal
        closeOnOverlayClick={false}
        size={"xl"}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>We have a winner!</ModalHeader>
          <ModalCloseButton />
          {winner.name ? (
            <ModalBody>
              <Grid alignItems={"center"} templateColumns="repeat(2, 1fr)">
                <GridItem>
                  <Center>
                    <Link color="#63F6FF" href={winner.url} isExternal>
                      <h2 className="basis-1/2 text-2xl underline">
                        <strong>{winner.name}</strong>
                      </h2>
                    </Link>
                  </Center>
                </GridItem>
                <GridItem>
                  <img src={saly} />
                </GridItem>
              </Grid>
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
      </Modal>
    </>
  );
}
export default Winner;
