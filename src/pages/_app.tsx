import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>React Avançado - Rola Preta</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="description" content="AAAA chupa minha rola" />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
