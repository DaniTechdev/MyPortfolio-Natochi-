import "../styles/globals.css";

//internal imports
import { ThemeProvider } from "../Context/themecontext";
import Navbar from "../Components/Navbar/Navbar";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
      <ScrollToTop />
    </ThemeProvider>
  );
}
