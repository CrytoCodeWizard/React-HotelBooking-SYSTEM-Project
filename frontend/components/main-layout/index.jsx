import Head from 'next/head';
import React from 'react';
import Footers from './footers';
import Navbar from './navbar';

function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || 'Beach Resort'}</title>
        <meta name='description' content='EMS ― Event Management System' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footers />
    </>
  );
}

export default MainLayout;
