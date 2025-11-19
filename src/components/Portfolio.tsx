import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// images

import brainWave from "/brainWave.png";
import amaizo from "/amaizo.png"
import crud from "/crud.png";
import medi from "/medilab.png";
import edu from "/edu.png"
import positive from "/positive.png"
import portof from "/portof.png";


const items = [
  {
    id: 1,
    title: "Brainwave",
    img: brainWave,
    desc: "Brainwave is a visually striking landing page built with a modern UI and vibrant color palette. It invites visitors to explore the potential of AI-powered chat by showcasing features.",
    link: "https://brainwave-loayzeid.vercel.app/",
  },
  {
    id: 2,
    title: "Amaizo Chat Bot",
    img: amaizo,
    desc: "A Real-time Chat Translator that allows users to sign up, sign in, and chat with a chatbot that translates their messages into another language using the Google Translate API.",
    link: "https://amaizo-chat-bot.vercel.app/",
  },
  {
    id: 3,
    title: "Crud Application",
    img: crud,
    desc: "A project containing code for a CRUD (Create, Read, Update, Delete) operations web application. Implements basic database functionalities for managing resources efficiently.",
    link: "https://loay-zeid.github.io/CRUDProject/",
  },
  {
    id: 4,
    title: "Medilab",
    img: medi,
    desc: "A frontend web project built with HTML, CSS, and JavaScript, featuring a clean, responsive layout for a medical platform. Implements interactive UI components and responsive design to provide seamless user experiences across devices.",
    link: "https://loay-zeid.github.io/Medilab/",
  },
     {
    id: 5,
    title: "EduPortal",
    img: edu,
    desc: "Edu Portal is an innovative online platform built using the Bootstrap framework, designed to provide users with a user-friendly and interactive learning experience.",
    link: "https://loay-zeid.github.io/EduPortal/",
  },{
    id: 6,
    title: "PositiveLandingPage",
    img: positive,
    desc: "This project is a Positive Brand landing page,Brand website with the visual identity.",
    link: "https://loay-zeid.github.io/PositiveLandingPage/",
  },{
    id: 7,
    title: "animated Portfolio",
    img: portof,
    desc: "This project is a simple animated portfolio to show your project through it and contact with the others.",
    link: "https://loay-zeid.github.io/myPortfolio/",
  }
  
];

const Single = ({
  item,
}: {
  item: { id: number; title: string; img: string; desc: string; link: string };
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="h-screen overflow-hidden px-1">
      <div
        className="mx-auto flex size-full max-w-7xl items-center justify-center gap-12
          overflow-hidden max-lg:flex-col"
      >
        <div className="h-1/2 w-full max-lg:h-[300px]" ref={ref}>
          <img
            src={item.img}
            alt={item.title}
            className="size-full object-cover max-lg:object-contain"
          />
        </div>

        <motion.div
          className="flex flex-col gap-8 max-lg:!transform-none max-lg:items-center max-lg:gap-4
            max-lg:text-center"
          style={{ y }}
        >
          <h2 className="text-7xl max-lg:text-5xl">{item.title}</h2>
          <p
            className="my-3 text-justify text-xl max-lg:my-1 max-lg:px-2 max-lg:text-center
              max-lg:text-base max-lg:font-light"
          >
            {item.desc}
          </p>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="w-[200px] rounded-md bg-yellow-600 py-2 text-center transition ease-out
              hover:bg-gray-400 hover:text-black"
          >
            See Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative" ref={ref}>
      <div
        className="sticky left-0 top-0 z-10 mx-auto max-w-7xl bg-[#0c0c1d] pt-12 text-center
          max-lg:mb-12"
      >
        <p className="text-5xl font-medium tracking-wider text-yellow-600 max-lg:text-4xl">
          Featured Works
        </p>

        <motion.div
          style={{ scaleX }}
          className="mt-2 h-[10px] rounded-full border-none bg-white outline-none ring-0 focus:ring-0"
        />
      </div>

      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
