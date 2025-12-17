import "../common/IconAround.jsx";
import IconSkills from "../common/IconAround.jsx";
import { TypeAnimation } from "react-type-animation";
import { useDataStore } from "../store/useDataStore.js";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Send } from "lucide-react"

const Home = () => {
  const { profiles } = useDataStore((state) => state);

  const socials = [
    {
      title: "Instagram",
      icon: <Instagram />,
      link: profiles?.socials?.instagram,
    }, {
      title: "LinkedIn",
      icon: <Linkedin />,
      link: profiles?.socials?.linkedin,
    }, {
      title: "Github",
      icon: <Github />,
      link: profiles?.socials?.github,
    }
  ]

  const sequence = profiles?.typingTexts?.reduce((acc, text) => {
    acc.push(text)
    acc.push(1000)
    return acc
  }, [])

  const finalSequence = (sequence && sequence.length > 0)
    ? sequence
    : ["Frontend Developer", 1000, "Teknik Informatika", 1000];

  return (
    <section
      id="home"
      className="scroll-section transition-all w-full lg:min-h-screen min-h-[auto] bg-gray-100 dark:bg-slate-800 flex items-center justify-center lg:py-0 py-20 overflow-hidden"
    >
      <div className="container mx-auto md:max-w-2xl lg:max-w-5xl">
        <div className="flex flex-col-reverse items-center px-6 md:px-4 md:flex-row gap-y-10">
          <div className="flex items-center w-full">
            <div className="w-1/6 md:w-1/4">
              <div className="grid gap-3 text-lg md:gap-3 md:text-2xl text-slate-800 dark:text-gray-100">
                {socials.map((social, index) => (
                  <motion.a
                    href={social.link}
                    key={index}
                    target="_blank"
                    className="transition-all hover:text-teal-600 hover:drop-shadow-md w-max"
                    aria-label={`Lihat ${social.title}`}
                    initial={{ opacity: 0, y: -30, x: -30 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <motion.div className="w-full text-slate-800 dark:text-gray-100"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="mb-3 text-2xl font-semibold md:text-4xl drop-shadow-md">
                Adya Abdu Azizul Hakim 🙌
              </h1>
              <div className="flex items-center justify-start gap-2 mb-2 text-sm md:text-base">
                <hr className="w-1/7 sm:w-1/3 border-slate-800 dark:border-gray-100" />
                <TypeAnimation
                  sequence={finalSequence}
                  wrapper="p"
                  speed={20}
                  style={{ fontSize: "1rem", display: "inline-block", background: "transparent" }}
                  repeat={Infinity}
                />
              </div>
              <p className="mb-5 text-sm text-justify md:text-base">
                {profiles?.heroText}
              </p>
              <a
                href="#about"
                className="flex items-center px-4 py-2 text-xs text-white transition-all bg-slate-800 dark:bg-teal-600 w-max rounded-xl md:text-sm hover:bg-teal-600 drop-shadow-md active:scale-95"
              >
                Berkenalan?
                <Send className="size-4 ml-1" />
              </a>
            </motion.div>
          </div>
          <div className="relative w-full col">
            <motion.div className="img-blob w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] mx-auto rounded-full overflow-hidden border-8 border-slate-800 dark:border-teal-600 drop-shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}

            >
              <img
                src={profiles?.profileImageUrl}
                alt="profile Hakim"
                className="block object-cover w-full transition duration-500 hover:scale-125"
              />
            </motion.div>

            <IconSkills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
