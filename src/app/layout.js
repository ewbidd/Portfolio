import "./globals.css";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";
import PageTransition from "./components/PageTransition";
import ParticlesBackground from "./components/ParticlesBackground";
import ClientWrapper from "./components/ClientWrapper";
import SpotlightEffect from "./components/SpotlightEffect";

export const metadata = {
  title: "ewbid",
  description: "Portfolio ewbid",
};

export default function RootLayout({ children }) {
  const isNotFound = children?.type?.name === 'NotFound';
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>

        {/* <div className="bg-gradient position-absolute top-0 start-0 w-100 h-100"></div> */}
        {!isNotFound && <Header />}
        {!isNotFound && <SpotlightEffect />}
        {!isNotFound && <ParticlesBackground />}
        {/* <PageTransition></PageTransition> */}
        {children}
        {!isNotFound && <Footer />}
        {!isNotFound && <SocialBar />}

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
