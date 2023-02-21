import { Flex, Link, HStack } from '@chakra-ui/react';

import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

function Navbar() {
	return (
		<Flex
			align={'center'}
			justify={'center'}
			padding={{
				base: '1.62em',
				sm: '1.39em',
				md: '1em',
				lg: '.82em',
				xl: '.48em',
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
					padding={{ base: 1 }}
					boxShadow={'base'}
					bg={'prussian-blue'}
					fontSize={{
						base: '1.125em',
						sm: '1.5em',
						md: '1.5em',
						lg: '1.8em',
						xl: '2em',
					}}
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
					padding={{ base: 1 }}
					boxShadow={'base'}
					bg={'prussian-blue'}
					fontSize={{
						base: '1.125em',
						sm: '1.5em',
						md: '1.5em',
						lg: '1.8em',
						xl: '2em',
					}}
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
