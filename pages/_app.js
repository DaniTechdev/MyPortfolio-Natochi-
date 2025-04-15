import "../styles/globals.css";

//internal imports
import { ThemeProvider } from "../Context/themecontext";
import Navbar from "../Components/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
