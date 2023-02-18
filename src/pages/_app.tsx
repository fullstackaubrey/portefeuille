import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aubrey Dill | Portefeuille</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
