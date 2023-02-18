import {
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Text,
	FormControl,
	FormLabel,
	Input,
} from '@chakra-ui/react';

import { useRef, useState } from 'react';

function InitialFocus() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	//({ defaultIsOpen: true });

	const initialRef = useRef('');
	let inputRef = useRef(null);

	const [input, setInput] = useState('');

	const handleClick = () => {
		setInput(inputRef.current.value);
		localStorage.setItem('player', inputRef.current.value);
	};

	return (
		<>
			<Modal
				size={'sm'}
				initialFocusRef={initialRef}
				isOpen={isOpen}
				onClose={onClose}
				closeOnOverlayClick={false}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Player Registration</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Your Name</FormLabel>
							<Input
								id="player-name"
								ref={inputRef}
								placeholder="AAA"
								maxLength={'3'}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={handleClick}>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
export default InitialFocus;
