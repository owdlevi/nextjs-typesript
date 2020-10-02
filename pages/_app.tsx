// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Reset from '../components/reset'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
