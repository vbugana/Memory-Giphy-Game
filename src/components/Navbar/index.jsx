import { Flex, Link, HStack, Button, ButtonGroup } from '@chakra-ui/react';

import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

function Navbar() {
	return (
		<Flex align={'center'} justify={'center'} padding={'4'} marginTop={'6'}>
			<HStack>
				<Button borderRadius={'full'} padding={'4'} boxShadow={'base'}>
					<Link
						_hover={{ textDecoration: 'none' }}
						as={RouterLink}
						to="/"
						end
						className={({ isActive }) =>
							isActive ? 'nav-link active' : 'nav-link'
						}
					>
						Game
					</Link>
				</Button>
				<Button borderRadius={'full'} padding={'4'} boxShadow={'base'}>
					<Link
						_hover={{ textDecoration: 'none' }}
						as={RouterLink}
						to="scores"
						className={({ isActive }) =>
							isActive ? 'nav-link active' : 'nav-link'
						}
					>
						Scores
					</Link>
				</Button>
			</HStack>
		</Flex>
	);
}

export default Navbar;
