import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import localFont from "@next/font/local";

const myFont = localFont({
  src: "../assets/LexandDeca/LexendDeca-VariableFont.woff2",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
