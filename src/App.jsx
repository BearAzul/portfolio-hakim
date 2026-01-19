import { Helmet } from "react-helmet-async"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import HomePage from "./pages/HomePage.jsx";
import CertificatePage from "./pages/CertificatePage.jsx";
import Layouts from "./layouts/Layouts.jsx";
import CustomCursor from "./common/CustomCursor.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/certificates",
        element: <CertificatePage />
      }
    ]
  },
]);

const App = () => {
  return (
    <>
      <Helmet>
        <title>Adya Abdu Azizul Hakim — Frontend Developer</title>
        <meta name="description" content="Portofolio resmi Adya Abdu Azizul Hakim, seorang Frontend Web Developer yang berfokus pada pengembangan aplikasi modern dengan teknologi React.js, Node.js, dan Next.js" />
        <meta name="keywords" content="Adya Abdu Azizul Hakim, Web Developer, Frontend Developer, React, Node.js, Next.js, Portofolio Frontend Developer Kampung" />
        <meta name="author" content="Adya Abdu Azizul Hakim" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://akimdev.vercel.app" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Adya Abdu Azizul Hakim — Frontend Developer" />
        <meta property="og:description" content="Kunjungi portofolio profesional saya yang menampilkan proyek, keahlian, dan pengalaman sebagai Frontend Developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akimdev.vercel.app" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/103102235?v=4" />
        <meta property="og:site_name" content="AkimDev" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adya Abdu Azizul Hakim — Frontend Developer" />
        <meta name="twitter:description" content="Portofolio resmi Adya Abdu Azizul Hakim, seorang pengembang web profesional." />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/103102235?v=4" />
        <meta name="twitter:creator" content="@adya_abdu77" />

        <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/103102235?v=4" type="image/x-icon" />
      </Helmet>
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
