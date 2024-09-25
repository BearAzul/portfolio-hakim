import "../common/IconAround.jsx";
import IconSkills from "../common/IconAround.jsx";
import { TypeAnimation } from "react-type-animation";

const AnimateType = () => {
  return (
    <TypeAnimation 
      sequence={[
        "Frontend Developer",
        1000,
        "Mahasiswa USM",
        1000,
        "Teknik Informatika",
        1000,
        "I ❤️ Simple Code",
        1000,
      ]}
      wrapper="p"
      speed={20}
      style={{ fontSize: "1rem", display: "inline-block", background: "transparent" }}
      repeat={Infinity}
    />
  );
}

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="transition-all w-full lg:min-h-screen min-h-[auto] bg-gray-100 dark:bg-slate-800 flex items-center justify-center lg:py-0 py-20 overflow-hidden"
      >
        <div className="container mx-auto md:max-w-2xl lg:max-w-5xl">
          <div className="flex flex-col-reverse items-center px-6 md:px-4 md:flex-row gap-y-10">
            <div className="flex items-center w-full">
              <div className="w-1/6 md:w-1/4">
                <div className="grid gap-2 text-lg animate__animated animate__fadeInLeft md:gap-3 md:text-2xl text-slate-800 dark:text-gray-100">
                  <a
                    href="https://instagram.com/az.izul_"
                    target="_blank"
                    className="transition-all hover:text-teal-600 hover:drop-shadow-md w-max"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a
                    href="#"
                    className="transition-all hover:text-teal-600 hover:drop-shadow-md w-max"
                  >
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                  <a
                    href="https://github.com/bearazul"
                    target="_blank"
                    className="transition-all hover:text-teal-600 hover:drop-shadow-md w-max"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </div>
              </div>
              <div className="w-full text-slate-800 dark:text-gray-100 animate__animated animate__fadeInUp">
                <h1 className="mb-3 text-2xl font-semibold md:text-4xl drop-shadow-md">
                  Adya Abdu Azizul Hakim 🙌
                </h1>
                <div className="flex items-center justify-start gap-2 mb-2 text-sm md:text-base">
                  <hr className="w-1/3 border-slate-800 dark:border-gray-100" />
                  <AnimateType />
                </div>
                <p className="mb-5 text-sm text-justify md:text-base">
                  Saya merupakan seorang mahasiswa di Universitas Semarang yang sangat berpengalaman di bidang Frontend Developer.
                </p>
                <a
                  href="#about"
                  className="flex items-center px-4 py-2 text-xs text-white transition-all bg-slate-800 dark:bg-teal-600 w-max rounded-xl md:text-sm hover:bg-teal-600 drop-shadow-md active:scale-95"
                >
                  Berkenalan?
                  <i className="ri-send-plane-fill ms-3"></i>
                </a>
              </div>
            </div>
            <div className="relative w-full col">
              <div className="img-blob w-[200px] lg:w-[300px] mx-auto rounded-full overflow-hidden border-8 border-slate-800 dark:border-teal-600 drop-shadow-md animate__animated animate__fadeInRight">
                <img
                  src="https://avatars.githubusercontent.com/u/103102235?s=400&u=16d2c51e3e1ecaf2696c18fd96c7598574162ca8&v=4"
                  alt="profile Hakim"
                  className="block object-cover w-full transition duration-500 hover:scale-125"
                />
              </div>

              <IconSkills />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
