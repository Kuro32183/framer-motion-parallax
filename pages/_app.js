import '../styles/globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return <>
    <header>
      {/* <Navigation /> */}
    </header>
    <Component {...pageProps} />
    {/* <Footer /> */}
  </>
}

export default MyApp
