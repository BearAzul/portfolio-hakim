import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useDataStore } from "../store/useDataStore.js";
import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle, SendHorizontal, ArrowRight } from "lucide-react"

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

  const { profiles } = useDataStore((state) => state);

  const socials = [
    {
      title: "Email",
      icon: <Mail />,
      subtitle: "adyaabduaah@gmail.com",
      link: `${profiles?.socials?.email}?subject=Hallo&body=Hi, I would like to get in touch.`,
    },
    {
      title: "Instagram",
      icon: <Instagram />,
      subtitle: "@az.izul_",
      link: profiles?.socials?.instagram,
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle />,
      subtitle: "+62 896 - 1374 - 2316",
      link: profiles?.socials?.whatsapp,
    }
  ]

  return (
    <section
      id="contact"
      className="scroll-section flex items-center py-20 overflow-hidden transition-all bg-gray-100 dark:bg-slate-800"
    >
      <div className="container mx-auto md:max-w-2xl lg:max-w-5xl relative">
        <div className="flex flex-col items-start justify-center gap-8 px-6 md:flex-row md:px-4">
          <div className="w-full text-center col text-slate-800 dark:text-gray-100 md:w-3/4 lg:w-1/2">
            <h1 className="mb-4 font-semibold md:text-lg">Hubungi Saya</h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              {socials.map((social, index) => (
                <motion.div
                  key={index}
                  className="card flex flex-col items-center dark:bg-slate-800 bg-gray-100"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  {social.icon}
                  <h2 className="mt-1">{social.title}</h2>
                  <p>{social.subtitle}</p>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnWrite"
                    aria-label="contact"
                  >
                    <span>Write Me</span>
                    <ArrowRight className="size-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full col">
            <h1 className="mb-4 font-semibold text-center md:text-lg text-slate-800 dark:text-gray-100">
              Tuliskan Projek Anda Inginkan
            </h1>
            <motion.form
              ref={form}
              onSubmit={onSubmit}
              className="form text-slate-800 dark:text-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="group relative z-1 w-full mb-4 dark:bg-slate-800 bg-gray-100">
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
              <div className="group relative z-1 w-full mb-4 dark:bg-slate-800 bg-gray-100">
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
              <div className="group relative z-1 w-full mb-4 dark:bg-slate-800 bg-gray-100">
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
                <motion.button
                  type="submit"
                  className="p-3 text-sm text-white shadow-md cursor-pointer dark:bg-teal-600 bg-slate-800 rounded-xl hover:bg-teal-600 flex items-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.9, y: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Send Message
                  <SendHorizontal className="size-4 ml-2" />
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
