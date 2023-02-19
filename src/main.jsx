import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Theme
import '@fontsource/press-start-2p/400.css';
import theme from './utils/theme';

import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
