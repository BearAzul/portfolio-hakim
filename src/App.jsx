import CustomCursor from "./common/CustomCursor.jsx";
import Footer from "./components/Footer.jsx";
import Support from "./components/Support.jsx";
import QRCode from "./common/QRCode.jsx";
import BtnTop from "./common/BtnTop.jsx";
import AnimatedRoutes from "./Routes/AnimatedRoutes.jsx";

const App = () => {
  return (
    <>
      <CustomCursor />

      <AnimatedRoutes />

      <Footer />
      <Support />
      <QRCode />
      <BtnTop />
    </>
  );
};

export default App;
