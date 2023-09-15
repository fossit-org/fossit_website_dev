"use client";
import { Cutive_Mono } from "next/font/google";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSolidBookAlt } from "react-icons/bi";
import { AnimatePresence, animate, easeIn, motion } from "framer-motion";
import Link from "next/link";
const cutive = Cutive_Mono({ subsets: ["latin"], weight: ["400"] });

export default function Nav() {
  const [active, setActive] = useState(true);

  const items = [
    {
      name: "Home",
      icon: <AiFillHome />,
      link: "/",
    },
    {
      name: "Learn",
      icon: <BiSolidBookAlt />,
      link: "/learn",
    },
    {
      name: "Projects",
      icon: <BiSolidBookAlt />,
      link: "/projects",
    },
    {
      name: "Community",
      icon: <BiSolidBookAlt />,
      link: "/community",
    },
  ];

  return (
    <nav className="md:min-h-screen fixed md:static bottom-0 w-screen md:h-full glass md:p-8 rounded-none md:w-max flex md:flex-col items-center h-max md:items-start shadow-2xl gap-8">
      <div className="hidden md:flex md:min-h-[50px] justify-center items-center gap-4">
        <button
          className="flex flex-col justify-center items-center gap-1"
          onClick={() => setActive(!active)}>
          <span className="w-6 h-[2px] bg-accent"></span>
          <span className="w-6 h-[2px] bg-accent"></span>
        </button>
        <AnimatePresence>
          {active && (
            <motion.h1
              initial={{ opacity: 0, x: -12 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.25 },
              }}
              exit={{
                opacity: 0,
                x: -12,
                transition: { ease: easeIn, duration: 0.25 },
              }}
              className={`${cutive.className} text-xl font-bold`}>
              FOSSIT
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
      <motion.ul className="flex p-8 md:p-0 md:flex-col md:items-start items-center justify-between md:justify-center gap-4 md:max-w-[300px] w-full">
        {items.map((item, index) => (
          <Link key={index} href={item.link}>
            <li
              className={`flex flex-col md:flex-row md:gap-4 text-center md:text-start justify-center items-center`}>
              <span
                className={`text-accent text-center transition-all duration-300 ${
                  active ? "text-base" : "text-lg"
                } `}>
                {item.icon}
              </span>
              <AnimatePresence>
                {active && (
                  <motion.span
                    animate={{ x: 0 }}
                    exit={{ x: -5, opacity: 0, transition: { ease: easeIn } }}
                    className={`text-base md:text-base font-medium`}>
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </li>
          </Link>
        ))}
      </motion.ul>
    </nav>
  );
}
