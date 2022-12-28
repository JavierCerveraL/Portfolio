import Head from 'next/head';
import { BsCircleHalf } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { useState } from 'react';

import Image from 'next/image';
import design from '../public/design.png';
import consult from '../public/consulting.png';

import code from '../public/code.png';
import web1 from '../public/web1.png';
import web2 from '../public/web 2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import face from '../public/cartoon-nobg.png';

import skill1 from '../public/skill1.png';
import skill2 from '../public/skill2.png';
import skill3 from '../public/skill3.png';
import skill4 from '../public/skill4.png';
import skill5 from '../public/skill5.png';
import skill6 from '../public/skill6.png';
import skill7 from '../public/skill7.png';
import skill8 from '../public/skill8.png';
import skill9 from '../public/skill9.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Javier Cervera Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-stone-100 px-10 md:px-20 lg-px-40 dark:bg-stone-900 ">
        <section className="min-h-screen bg ">
          {/* {NAVBAR} */}
          {/* {NAVBAR} */}
          {/* {NAVBAR} */}
          <nav className="py-10 mb-12 flex justify-between">
            <div className="rounded-sm  bg-stone-900">
              <h1 className="text-3xl text-stone-100 dark:text-stone-100 font-good ">
                J<span className="text-red-600 hvr-grow">V</span>R
              </h1>
            </div>

            <ul className="flex items-center">
              <li>
                <BsCircleHalf
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-3xl text-stone-900 dark:text-stone-100 "
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-red-600
                to-rose-800 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* {HERO} */}
          {/* {HERO} */}
          {/* {HERO} */}
          <div className="text-center p-2 m-10">
            <h2 className="text-6xl py-2  font-bold text-red-500 md:text-7xl font-coms">
              Javier Cervera
            </h2>
            <h3 className="text-2xl py-2 font-medium text-stone-900 md:text-3xl dark:text-stone-100 font-com">
              Frontend Developer
            </h3>
            <p className=" dark:text-stone-100 text-md mx-auto pt-2 leading-5  font-light text-stone-700 md:text-lg max-w-xl ">
              Freelancer providing Web Services with the latest technolgies
            </p>
            <p className="text-md dark:text-stone-100 mx-auto text-stone-900 font-light lg max-w-xl ">
              Contact me for any further inquires.
            </p>
          </div>

          {/* {Icons} */}
          <div className=" text-5xl flex justify-center gap-10 text-blue-500">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className=" mx-auto relative bg-gradient-to-b from-red-500  to-stone-900  flex justify-center rounded-full  w-70 h-70 mt-10 overflow-hidden md:h-96 md:w-96">
            <Image
              src={face}
              className=" rounded-full "
              objectFit="cover"
              alt="developer-image"
              layout="responsive"
            />
          </div>
        </section>
        <hr className="my-5 mt-10  bg-black dark:bg-white" />

        {/* {SERVICES} */}

        <section>
          <div>
            <h3 className="text-3xl text-stone-900 font-semibold  py-1 pt-5 pb-3 dark:text-white font-good">
              My Services
            </h3>
          </div>
          <div className="lg:flex gap-10">
            {/* {SERVICES} */}
            <div className="text-center shadow-lg p-3 pt-16 rounded-xl my-10">
              <Image
                className="mx-auto "
                src={design}
                width={100}
                height={100}
                alt="developer-image"
              />
              <h3 className="text-stone-900  text-2xl font-medium pt-5 pb-2  dark:text-red-600 ">
                Responsive Web Design
              </h3>
              <p className="text-stone-900 pb-3 pt-3 dark:text-white text-xl">
                Your site will display properly on any device, including desktop
                computers, tables and mobile phones.
              </p>
            </div>
            {/* {SERVICES} */}
            <div className="text-center shadow-lg p-3 pt-16 rounded-xl my-10">
              <Image
                className="mx-auto "
                src={code}
                width={100}
                height={100}
                alt="developer-image"
              />
              <h3 className="text-stone-900  text-2xl font-medium pt-5 pb-2  dark:text-red-600 ">
                UI Design
              </h3>
              <p className="text-stone-900 pb-3 pt-3 dark:text-white text-xl">
                Attractive and modern web pages, customized for every client.
              </p>
            </div>
            {/* {SERVICES} */}
            <div className="text-center shadow-lg p-3 pt-16 rounded-xl my-10">
              <Image
                className="mx-auto "
                src={consult}
                width={100}
                height={100}
                alt="developer-image"
              />
              <h3 className="text-stone-900  text-2xl font-medium pt-5 pb-2  dark:text-red-600 ">
                Development and SEO
              </h3>
              <p className="text-stone-900 pb-3 pt-3 dark:text-white text-xl">
                Your site will display properly on any device, including desktop
                computers, tables and mobile phones.
              </p>
            </div>
          </div>
        </section>
        <hr className="my-5 mt-10  bg-black dark:bg-white" />

        {/* {Tools} */}

        <section>
          <div>
            <h3 className="text-3xl text-stone-900 font-semibold  py-1 pt-5 pb-5 dark:text-white font-good">
              TOOLS AND SKILSS
            </h3>

            <div className=" flex-col gap-10 py-10 lg:flex-row lg:flex-wrap  grid grid-cols-3 md:grid-cols-3 sm:grid-cols-3   text-stone-900 font-semibold  py-1 pt-5  dark:text-white ">
              <div className="basis-1/2 flex-1 shadow-lg">
                <Image
                  src={skill1}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </div>
              <div className="basis-1/2 flex-1 shadow-lg">
                <Image
                  src={skill2}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </div>
              <div className="basis-1/2 flex-1 shadow-lg">
                <Image
                  src={skill3}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </div>
              <div className="basis-1/2 flex-1 shadow-lg">
                <Image
                  src={skill4}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </div>
              <div className="basis-1/2 flex-1 shadow-lg">
                <Image
                  src={skill5}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </div>
              <div className="basis-1/2 flex-1 shadow-lg">
                <Image
                  src={skill6}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </div>
              <div className="basis-1/2 flex-1 shadow-lg">
                <Image
                  src={skill7}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </div>
              <div className="basis-1/2 flex-1 shadow-lg">
                <Image
                  src={skill8}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </div>
              <div className="basis-1/2 flex-1 shadow-lg">
                <Image
                  src={skill9}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </div>
            </div>
          </div>
        </section>
        <hr className="my-5 mt-10  bg-black dark:bg-white" />
        {/* {PORTFOLIO} */}
        <section>
          <div>
            <h3 className="text-3xl text-stone-900 font-semibold  pt-16  dark:text-white font-good">
              PORTFOLIO
            </h3>
          </div>
          <div className=" flex-col gap-10 py-10 lg:flex-row lg:flex-wrap  grid grid-cols-1 md:grid-cols-2 ">
            {/* {web} */}
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image
                src={web1}
                className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                alt="developer-image"
              />
            </div>
            {/* {web} */}
            <div className="basis-1/3 flex-1 shadow-lg ">
              <Image
                src={web2}
                className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                alt="developer-image"
              />
            </div>
            {/* {web} */}
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image
                src={web3}
                className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out "
                width={'100%'}
                height={'100%'}
                layout="responsive"
                alt="developer-image"
              />
            </div>
            {/* {web} */}
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image
                src={web4}
                className="rounded-xl object-cover   hover:scale-110 transition duration-300 ease-in-out"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                alt="developer-image"
              />
            </div>
          </div>
        </section>
        <hr className="my-5 mt-10 bg-black dark:bg-white" />

        {/* {Contact form} */}

        <section>
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h3 className="text-3xl text-stone-900 font-semibold  text-center pt-16 pb-5 dark:text-white font-good">
              CONTACTME
            </h3>

            <form
              action="https://formspree.io/f/xknawryd"
              method="POST"
              class="space-y-8"
            >
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300"
                  name="Name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300"
                  name="Email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-stone-900 dark:text-stone-400"
                  name="Message"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-stone-900 bg-stone-50 rounded-lg shadow-sm border border-stone-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-gradient-to-r from-red-600
                to-rose-800 text-white px-4 py-2 rounded-md ml-8 text-center "
              >
                Send
              </button>
            </form>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}
