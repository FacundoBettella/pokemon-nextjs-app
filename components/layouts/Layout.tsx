import React, { FC, PropsWithChildren } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface IProps {
    title?: string
}

export const Layout: FC<PropsWithChildren<IProps>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pókemon App"}</title>
                <meta name="author" content="Facundo Bettella Iunnissi" />
                <meta name="description" content={`Información sobre el pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
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
