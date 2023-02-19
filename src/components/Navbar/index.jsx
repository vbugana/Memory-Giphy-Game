import { Flex, Link, HStack } from '@chakra-ui/react';

import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

function Navbar() {
	return (
		<Flex align={'center'} justify={'center'} padding={4} bg={'sky-blue'}>
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

/**
 * button a{
  color:white;
  font-family:Helvetica, sans-serif;
  font-weight:bold;
  font-size:36px;
  text-align: center;
  text-decoration:none;
  background-color:#FFA12B;
  display:block;
  position:relative;
  padding:20px 40px;
  
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button a:active{
  top:10px;
  background-color:#F78900;
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
}

.button:after{
  content:"";
  height:100%;
  width:100%;
  padding:4px;
  position: absolute;
  bottom:-15px;
  left:-4px;
  z-index:-1;
  background-color:#2B1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
 */
