import { Flex, Link, HStack } from '@chakra-ui/react';

import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

function Navbar() {
	return (
		<Flex
			id="footer-nav"
			align={'center'}
			justify={'center'}
			paddingY={{
				base: '1.125em',
				lg: '.75em',
				xl: '.38em',
			}}
			bg={'sky-blue'}
			h={{ base: '8%', sm: '' }}
		>
			<HStack>
				<Link
					as={RouterLink}
					to="/"
					end
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					// Styling
					variant={{
						sm: 'sm',
						md: 'md',
						lg: 'lg',
						xl: 'xl',
					}}
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
					variant={{
						sm: 'sm',
						md: 'md',
						lg: 'lg',
						xl: 'xl',
					}}
				>
					Scores
				</Link>
			</HStack>
		</Flex>
	);
}

export default Navbar;
