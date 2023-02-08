import './index.css';

import App from './App';
import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
