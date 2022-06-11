import '../styles/globals.css'
import Navbar from '../sections/navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
  </> 
}

export default MyApp
