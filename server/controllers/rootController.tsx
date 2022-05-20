import express from 'express'
import React from 'react'
import {
    renderToNodeStream
} from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter, StaticRouterContext } from 'react-router'
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

    const context: StaticRouterContext = {}

    const sheet = new ServerStyleSheet()

    const staticMarkup = sheet.collectStyles(
            <StaticRouter
                context={context}
                location={req.path}
            >
                <GlobalStyles />
                <App />
            </StaticRouter>
    )

    const staticStyles = sheet.getStyleElement()

    res.status(200)

    const stream = sheet.interleaveWithNodeStream(
        renderToNodeStream(
            <Html
                scripts={jsFiles}
                styles={staticStyles}
            >
                {staticMarkup}
            </Html>
        )
    )

    stream.pipe(
        res
    )
}
