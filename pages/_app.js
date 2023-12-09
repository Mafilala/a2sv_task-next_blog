import NavBar from '../components/NavBar'
import Head from 'next/head';
function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default App;