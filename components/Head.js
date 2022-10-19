import React from 'react';
import Head from 'next/head'

export const HeadApp = ({ title, description, url }) => {
    return (<Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes" />
        <meta httpEquiv="content-language" content={'en'} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={'http://localhost:3000' + (url ? url : '/404')} />
        <meta name="author" content="Website Animation - Gumroad" />
        <meta name="copyright" content="Website Animation - Gumroad" />
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        {/* favicon = 32x32 */}
        {/* favicon = 16x16 */}
        <link rel="icon" type="image/png" sizes="32x32" href="" />
        <link rel="icon" type="image/png" sizes="16x16" href="" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        {/* apple touch icon = 180x180 */}
        <link rel="apple-touch-icon" sizes="180x180" href="" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Website Animation" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        {/* 
            (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) = title1125x2436
            (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) = title750x1334
            (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) = title-1242x2208
            (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) = title640x1136
            (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) = title1536x2048
            (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) = title1668x2224
            (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) = title2048x2732
        */}
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" href="" />
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="" />
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)" href="" />
        <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="" />
        <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" href="" />
        <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" href="" />
        <link rel="apple-touch-startup-image" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" href="" />
        {/* svg icon */}
        <link rel="mask-icon" href="" color="#3B82F6" />
        {/* manifest icon */}
        <link rel="manifest" href="" />
        {/* facebook info */}
        <meta property="fb:app_id" content={''} />
        <meta property="og:site_name" content="localhost:3000" />
        <meta property="article:publisher" content="https://www.facebook.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={'http://localhost:3000/images/phone.png'} />
        <meta property="og:url" content={'http://localhost:3000'} />
        {/* twitter info */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@localhost" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={'https://localhost:3000/images/phone.png'} />
        <meta name="twitter:url" content={'https://localhost:3000'} />
        <meta name="gs:twitter:text" content={title} />
    </Head>)
}
