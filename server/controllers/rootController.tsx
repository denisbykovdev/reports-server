import express from 'express'
import React from 'react'
import {
    renderToPipeableStream
} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from '../../client/app/App'
import fs from 'fs'
import Html from '../views/Html'
import GlobalStyles from '../../client/styledConfig/globalStyles'

export default function rootController(
    req: express.Request,
    res: express.Response
): void {

    const jsFiles: Array<string> = []

    fs.readdirSync('./dist/static/').forEach(file => {

        if (file.split('.').pop() === 'js') jsFiles.push(file)
    })

    const context: any = {}

    if (context.url) {
        res.redirect(context.url)
    }

    res.status(200);

    let didError = false;

    const stream = renderToPipeableStream(
        <Html
            scripts={jsFiles}
        // styles={staticStyles}
        >
            <StaticRouter
                context={context}
                location={req.path}
            >
                <GlobalStyles />
                <App />
            </StaticRouter>
        </Html>,
        {
            // onShellReady() {
            //     // The content above all Suspense boundaries is ready.
            //     // If something errored before we started streaming, we set the error code appropriately.
            //     res.statusCode = didError ? 500 : 200;
            //     res.setHeader('Content-type', 'text/html');
            //     stream.pipe(res);
            // },
            // onShellError(error) {
            //     // Something errored before we could complete the shell so we emit an alternative shell.
            //     res.statusCode = 500;
            //     res.send(
            //         '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
            //     );
            // },
            onAllReady() {
                // If you don't want streaming, use this instead of onShellReady.
                // This will fire after the entire page content is ready.
                // You can use this for crawlers or static generation.

                // res.statusCode = didError ? 500 : 200;
                // res.setHeader('Content-type', 'text/html');
                // stream.pipe(res);
            },
            onError(err) {
                didError = true;
                console.error(err);
            }
        }
    )

    stream.pipe(
        res
    )
}
