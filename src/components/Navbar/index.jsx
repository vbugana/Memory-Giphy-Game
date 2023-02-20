import { Flex, Link, HStack } from '@chakra-ui/react';

import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

function Navbar() {
	return (
		<Flex
			align={'center'}
			justify={'center'}
			padding={{
				base: '1.27em',
				sm: '.54em',
				md: '.58em',
				lg: '.48em',
				xl: '.62em',
			}}
			bg={'sky-blue'}
		>
			<HStack>
				<Link
					as={RouterLink}
					to="/"
					end
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					// styling
					color={'white'}
					borderRadius={'full'}
					padding={4}
					boxShadow={'base'}
					bg={'prussian-blue'}
					// hover styling
					_hover={{
						textDecoration: 'none',
					}}
					// active styling
					_active={{ bg: 'raisin-black', color: 'white' }}
				>
					Game
				</Link>

				<Link
					as={RouterLink}
					to="scores"
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					// styling
					color={'white'}
					borderRadius={'full'}
					padding={4}
					boxShadow={'base'}
					bg={'prussian-blue'}
					// hover styling
					_hover={{
						textDecoration: 'none',
					}}
					// active styling
					_active={{ bg: 'raisin-black', color: 'white' }}
				>
					Scores
				</Link>
			</HStack>
		</Flex>
	);
}

export default Navbar;
