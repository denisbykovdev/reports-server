import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { App } from './app/App'
import { BrowserRouter as Router }
    from "react-router-dom"

const container = document.getElementById('root');

hydrateRoot(
    container,
    <Router>
        <App />
    </Router>
);