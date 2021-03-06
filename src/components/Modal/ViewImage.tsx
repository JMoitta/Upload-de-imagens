import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent maxW="max-content" bgColor="pGray.800" minH="max-content">
        <Image src={imgUrl} maxW="900px" maxH="600px" />
        <ModalFooter
          justifyContent="flex-start"
          paddingBlock="2"
          paddingInline="2.5"
        >
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
