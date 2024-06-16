import "../../index.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!userName || !userEmail || !message) {
      Swal.fire({
        title: "Pesan Kosong",
        text: "Tolong, masukkan nama, email, dan pesan Anda!",
        icon: "question",
        confirmButtonText: "Ok",
      });
      
      return;
    }

    emailjs
      .sendForm("service_rafax9d", "template_6ln4vcz", form.current, {
        publicKey: "ybP6u8AU2tqU1r1on",
      })
      .then(
        () => {
          Swal.fire({
            title: "Selamat",
            text: "Pesan Anda berhasil terkirim!😍😉",
            icon: "success",
          });

          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "Error",
            text: "Terjadi kesalahan, pesan gagal terkirim!",
            icon: "error",
            confirmButtonText: "Ok",
          }, error.text);
        },
      );
  };

  return (
    <>
      <section
        id="contact"
        className="flex items-center py-20 overflow-hidden transition-all bg-gray-100 dark:bg-slate-800 lg:min-h-screen lg:py-0"
      >
        <div className="container mx-auto md:max-w-2xl lg:max-w-5xl">
          <div className="flex flex-col items-start justify-center gap-8 px-6 md:flex-row md:px-4">
            <div className="w-full text-center col text-slate-800 dark:text-gray-100 md:w-3/4 lg:w-1/2">
              <h1 className="mb-4 font-semibold md:text-lg">Hubungi Saya</h1>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                <div className="card" data-aos="fade-down-right">
                  <i className="ri-mail-line"></i>
                  <h3>Email</h3>
                  <p>adyaabduah@gmail.com</p>
                  <a
                    href="mailto:adyaabduazizulhakim@gmail.com?subject=Hallo&body=Hi, I would like to get in touch."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnWrite"
                  >
                    <span>Write Me</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
                <div
                  className="card"
                  data-aos="fade-down-right"
                  data-aos-delay="300"
                >
                  <i className="ri-instagram-line"></i>
                  <h3>Instagram</h3>
                  <p>@az.izul_</p>
                  <a
                    href="https://instagram.com/az.izul_"
                    target="_blank"
                    className="btnWrite"
                  >
                    <span>Write Me</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
                <div
                  className="card"
                  data-aos="fade-down-right"
                  data-aos-delay="600"
                >
                  <i className="ri-whatsapp-line"></i>
                  <h3>WhatsApp</h3>
                  <p>+62 896 - 1374 - 2316</p>
                  <a
                    href="https://wa.me/+6289613742316"
                    target="_blank"
                    className="btnWrite"
                  >
                    <span>Write Me</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full col">
              <h1 className="mb-4 font-semibold text-center md:text-lg text-slate-800 dark:text-gray-100">
                Tuliskan Projek Anda Inginkan
              </h1>
              <form
                ref={form}
                onSubmit={onSubmit}
                className="form"
                data-aos="fade-left"
              >
                <div className="group relative z-[1] w-full mb-4">
                  <label
                    htmlFor="name"
                    className="absolute text-xs md:text-sm -top-[8px] md:-top-[10px] px-1 bg-gray-100 dark:bg-slate-800 dark:text-gray-100 left-5 text-slate-800"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder="Masukkan Nama Anda"
                  />
                </div>
                <div className="group relative z-[1] w-full mb-4">
                  <label
                    htmlFor="email"
                    className="absolute text-xs md:text-sm -top-[8px] md:-top-[10px] px-1 bg-gray-100 left-5 text-slate-800 dark:bg-slate-800 dark:text-gray-100"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    placeholder="Masukkan Email Valid"
                  />
                </div>
                <div className="group relative z-[1] w-full mb-4">
                  <label
                    htmlFor="pesan"
                    className="absolute text-xs md:text-sm -top-[8px] md:-top-[10px] px-1 bg-gray-100 left-5 text-slate-800 dark:bg-slate-800 dark:text-gray-100"
                  >
                    Projek
                  </label>
                  <textarea
                    id="pesan"
                    name="message"
                    cols="30"
                    rows="8"
                    placeholder="Tuliskan projek/pesan kamu"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="p-3 text-sm text-white transition duration-500 shadow-md dark:bg-teal-600 bg-slate-800 rounded-xl hover:bg-teal-600 active:scale-75"
                  >
                    Send Message
                    <i className="ri-send-plane-fill ms-3"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
