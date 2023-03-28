import ReactDOM from 'react-dom/client';

import { Routing } from '@root/router';
import '@root/styles/index.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Routing />);
