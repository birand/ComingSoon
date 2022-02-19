import React, { ReactNode } from "react";
import Head from "next/head";
import Script from 'next/script'

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title} | NFT MARKETPLACE</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="LXNFT NEW GENERATION NFT MARKETPLACE"
      />
      <meta property="og:title" content={`${title} | Themeptation`} />
      <meta
        property="og:description"
        content="LXNFT NEW GENERATION NFT MARKETPLACE"
      />
      <meta property="og:url" content="https://lxnft.store" />
      <meta property="og:type" content="website" />
    </Head>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-5X3F9K9BQJ" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5X3F9K9BQJ');
        `}
      </Script>
    {children}
  </div>
);

export default Layout;
