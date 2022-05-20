import React from 'react'

export interface HtmlProps {
    scripts?: Array<string>;
    children: React.ReactNode;
    styles?: string | React.ReactNode;
    title?: string;
}

const Html: React.FC<HtmlProps> = ({
    children,
    scripts,
    styles,
    title
}: HtmlProps): React.ReactElement => {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1"
                />
                <meta httpEquiv="X-UA-Compatible"
                    content="ie=edge" />
                <title>{title}</title>
                {styles}
            </head>
            <body>
                <div id="root">{children}</div>

                {scripts && scripts.length > 0 && scripts.map((script, index) => (
                    <script src={`/${script}`}
                        key={index} ></script>
                ))}
            </body>
        </html>
    )
}

export default Html
