import AppBar from "@/components/appbar";
import Footer from "@/components/footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
