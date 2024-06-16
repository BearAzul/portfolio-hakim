import "../../index.css";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center w-full pt-10 pb-4 transition-all bg-slate-800 dark:bg-slate-950">
        <div className="container px-6 mx-auto md:max-w-2xl lg:max-w-5xl md:px-4">
          <div className="max-w-xl mx-auto mb-4 text-center title">
            <h1 className="mb-2 font-bold text-white md:text-xl">
              Akim
              <span className="text-teal-600">Dev.</span>
            </h1>
            <p className="text-[10px] md:text-xs text-white">
              Terima Kasih telah mengunjungi web portfolio saya, jika anda
              berminat dengan saya bisa langsung dm instagram saya.
            </p>
          </div>
          <div className="block max-w-xl mx-auto mb-3">
            <ul className="flex items-center justify-center gap-8 text-center">
              <li>
                <a
                  href="https://instagram.com/az.izul_"
                  target="_blank"
                  className="text-2xl text-gray-500"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bearazul"
                  className="text-2xl text-gray-500"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="text-2xl text-gray-500"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+6289613742316"
                  target="_blank"
                  className="text-2xl text-gray-500"
                >
                  <i className="ri-whatsapp-line"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr className="border-gray-500" />
          <p className="text-[10px] text-center md:text-left md:text-xs mt-4 text-gray-400">
            &copy; Adya Abdu Azizul Hakim. All Right Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
