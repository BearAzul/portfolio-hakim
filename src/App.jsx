import CustomCursor from "./common/CustomCursor.jsx";
import Footer from "./components/Footer.jsx";
import Support from "./components/Support.jsx";
import QRCode from "./common/QRCode.jsx";
import BtnTop from "./common/BtnTop.jsx";
import AnimatedRoutes from "./Routes/AnimatedRoutes.jsx";
import { useLocation } from "react-router";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const location = useLocation();

  const currentUrl = `https://akimdev.vercel.app${location.pathname}`;

  return (
    <>
      <link rel="canonical" href={currentUrl} />
      <meta property="og:url" content={currentUrl} />

      <CustomCursor />

      <AnimatedRoutes />

      <Footer />
      <Support />
      <QRCode />
      <BtnTop />
      <Analytics />
    </>
  );
};

export default App;
