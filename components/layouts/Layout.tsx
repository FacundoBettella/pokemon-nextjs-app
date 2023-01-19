import React, { FC, PropsWithChildren } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';
import { useRouter } from 'next/router';

interface IProps {
    title?: string
}

const location = (typeof window === "undefined") ? "" : window.location.origin;

export const Layout: FC<PropsWithChildren<IProps>> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || "Pókemon App"}</title>
                <meta name="author" content="Facundo Bettella Iunnissi" />
                <meta name="description" content={`Data about ${title} pokemon`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Data about ${title}`} />
                <meta property="og:description" content={`${title} page`} />
                <meta property="og:image" content= {`${location}/img/pokemon-yellow.png`} />

            </Head>

            <Navbar />

            <main style={{
                padding: "0px 20px"
            }}>
                {children}
            </main>
        </>
    )
}
