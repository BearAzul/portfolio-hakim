import "../../index.css";
import ScrollDown from "../../common/Buttons/ScrollDown.jsx"
import MyCV from "../../assets/files/CV - Adya Abdu Azizul Hakim.pdf"

const About = () => {
  const handleDownload = (event, downloadLink) => {
    event.preventDefault();
    const userConfirmed = window.confirm(
      "Apakah Anda ingin mengunduh file ini?"
    );
    if (userConfirmed) {
      window.location.href = downloadLink;
    }
  };
  return (
    <>
      <section
        id="about"
        className="flex items-center justify-center w-full py-20 transition-all bg-gray-100 dark:bg-slate-800 lg:min-h-screen lg:py-0"
      >
        <div className="container mx-auto md:max-w-2xl lg:max-w-5xl">
          <div className="grid gap-10 px-6 md:px-4">
            <div className="text-center title">
              <h1 className="text-xl font-semibold md:text-3xl text-slate-800 dark:text-gray-100">
                Tentang Saya
              </h1>
              <p className="text-xs text-teal-600 md:text-sm">
                Perkenalkan Saya
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="w-full col">
                <div className="img-about w-[300px] mx-auto rounded-lg">
                  <img
                    src="https://avatars.githubusercontent.com/u/103102235?s=400&u=16d2c51e3e1ecaf2696c18fd96c7598574162ca8&v=4"
                    alt="image hakim"
                    className="block w-full rounded-lg drop-shadow-lg"
                  />
                </div>
              </div>
              <div className="w-full col">
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-3 lg:gap-4">
                    <div className="card" data-aos="fade-down">
                      <i className="ri-award-fill"></i>
                      <h1>Pengalaman</h1>
                      <p>2+ Tahun</p>
                    </div>
                    <div
                      className="card"
                      data-aos="fade-down"
                      data-aos-delay="300"
                    >
                      <i className="ri-suitcase-fill"></i>
                      <h1>Selesai / Sukses</h1>
                      <p>5 Proyek</p>
                    </div>
                    <div
                      className="card"
                      data-aos="fade-down"
                      data-aos-delay="600"
                    >
                      <i className="ri-customer-service-2-fill"></i>
                      <h1>Layanan</h1>
                      <p>Online 24/7</p>
                    </div>
                  </div>
                  <div className="text-sm text-justify md:text-base dark:text-gray-100">
                    <p>
                      Frontend Developer, Saya membuat sebuah halaman web dari
                      UI/UX untuk antarmuka kedalam program. Saya telah
                      berpengalaman selama 2 tahun lebih dan banyak klien yang
                      senang dan puas dengan hasil pekerjaan saya.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={MyCV}
                      onClick={(event) => handleDownload(event, MyCV)}
                      download
                      data-aos="fade-up"
                      type="button"
                      className="p-3 text-xs text-white rounded-lg shadow-md bg-slate-800 dark:bg-teal-600 hover:bg-teal-600 w-max md:text-sm active:scale-75"
                    >
                      Download CV
                      <i className="ri-file-line ms-3"></i>
                    </a>
                    <ScrollDown link="#qualification" query="Pendidikan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
