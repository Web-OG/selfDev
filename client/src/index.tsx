import {StrictMode} from "react";
import {createRoot} from 'react-dom/client';
import {App} from "./app/App";
import './app/styles/index.scss'
import {ThemeProvider} from "./app/providers/ThemeProvider";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root element not found')
}

const container = createRoot(root);

container.render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
)