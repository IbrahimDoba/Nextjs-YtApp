"use client";
import React from "react";
// import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import main1 from "../Pages/HomeComponents/assets/main1.png";
import audiimg from "../Pages/HomeComponents/assets/audiimg.png";
import video from "../Pages/HomeComponents/assets/video.png";
import fast from "../Pages/HomeComponents/assets/fast.png";
import img1 from "../Pages/HomeComponents/assets/0101.png";
import img2 from "../Pages/HomeComponents/assets/002.png";
import img3 from "../Pages/HomeComponents/assets/003.png";
import Image from "next/image";

import { motion } from "framer-motion";

const introHeaderVariants = {
  hide: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};
const introPictureVariants = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

// 'text': '#000000',
// 'background': '#ffffff',
// 'primary-button': '#93dc99',
// 'secondary-button': '#ecf9f3',
// 'accent': '#46c38f',

const Mp4MainCard = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#ffffff]  pt-[100px] ">
      <section className="m-7  flex min-h-[500px] max-w-[80%] items-center justify-center rounded-lg  max-med:flex-col ">
        <article className="flex h-[500px] w-1/2 items-center md:w-1/2 max-med:h-auto max-med:w-auto">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={main1}
            alt="MP4 Downloader"
          />
        </article>
        <article className=" flex w-1/2 flex-col  p-4 max-med:h-auto   max-med:w-auto ">
          <h2 className=" mb-6  text-4xl font-extrabold tracking-tight  text-gray-800 md:text-4xl lg:text-5xl ">
            Video Downloader Mp4 free
          </h2>

          <p className=" mt-3 text-sm text-gray-700 sm:mx-auto sm:mt-5 sm:text-base md:mt-5 md:text-base ">
            SSaver Downloader is a user-friendly online web tool specifically
            designed for your video downloading needs. Whether you are searching
            for an efficient MP4 downloader, an online YouTube downloader MP4,
            or a free YouTube to MP4 downloader, SSaver is the solution you have
            been looking for! With SSaver Downloader, you can easily download
            YouTube videos in MP4 format and even convert videos to Mp3. Our
            tool is incredibly easy to use and allows you to download various
            types of content from YouTube. Now, you can enjoy your favorite
            videos offline, anytime, anywhere!
          </p>
        </article>
      </section>
      <section className="w-[80%] ">
        <h1 className="py-10 text-center text-[#000] text-4xl ">
          HOW TO DOWNLOAD VIDEOS FROM{" "}
        </h1>
        <div className=" border-b-[6px] border-b-ACT "></div>
        <p className="p-4 text-center text-lg ">
          You must follow these easy steps to download Audio and Videos from
          youtube. see their description below.
        </p>
        <div className=" grid flex-wrap justify-center gap-4 md:grid-cols-3">
          <div className="flex w-[auto] flex-col items-center rounded-2xl bg-SC_BTN">
            <article className="h-full w-full flex-1 rounded-t-xl border bg-white ">
              <Image
                className="  h-[280px] w-full  rounded-t-lg object-contain"
                src={img1}
                alt="YouTube Downloader Online - MP4"
              />
            </article>
            <section className="w-[80%]  flex-1  ">
              <h2 className="p-3 text-center text-2xl">Copy the URL</h2>
              <hr className=" mt-3 border border-ACT" />
              <p className="p-2">
                Go to YouTube and find the video you want to download. Copy the
                URL of the video from the address bar of your browser. The URL
                is the web address of the video page.
              </p>
            </section>
          </div>
          <div className="flex w-[auto] flex-col items-center rounded-2xl bg-SC_BTN">
            <article className="h-full w-full flex-1 rounded-t-xl border bg-white ">
              <Image
                className="  h-[280px] w-full   rounded-t-lg object-contain"
                src={img2}
                alt="Video Downloader MP4"
              />
            </article>
            <section className="w-[80%]  flex-1  ">
              <h2 className="p-3 text-center text-2xl">Paste and Search</h2>
              <hr className=" mt-3 border border-red-600" />
              <p className="p-2">
                Once you find the designated field, right-click inside it and
                select {"Paste"} to insert the copied URL. Then, click on the
                {"Search"} or {"Download"} button next to the field.
              </p>
            </section>
          </div>
          <div className="flex w-[auto] flex-col items-center rounded-2xl bg-SC_BTN">
            <article className="h-full w-full flex-1 rounded-t-xl border bg-white">
              <Image
                className="  h-[280px] w-full  rounded-t-lg object-contain"
                src={img3}
                alt="Free YouTube to MP4 Downloader"
              />
            </article>
            <section className="w-[80%]  flex-1  ">
              <h2 className="p-3 text-center text-2xl">
                Download Audio or Video
              </h2>
              <hr className=" mt-3 border border-ACT" />
              <p className="p-2">
                After clicking the {"Search:&apos;"} or {"Download"} button, the
                YouTube downloader will process the video URL and display the
                available download options. You will typically have the choice
                to download the video in different formats or resolutions, or
                extract only the audio as an MP3 file.
              </p>
            </section>
          </div>
        </div>
      </section>
      <section className="w-[80%]">
        <header className="py-10 text-center text-6xl"> Features</header>
        <section className="mb-4 flex max-med:flex-col ">
          <article className=" flex flex-1 items-center justify-center  md:w-1/2">
            <motion.div
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={introHeaderVariants}
            >
              <Image
                src={audiimg}
                alt="Free YouTube to MP4 Downloader"
                className=" h-[300px] w-auto rounded-t-lg max-med:h-[250px]"
              />
            </motion.div>
          </article>

          <article className="ml-5 flex flex-1 flex-col justify-center text-start ">
            {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
            <h2 className="mb-6  text-center text-4xl font-extrabold   text-gray-900 md:text-4xl lg:text-5xl max-med:mt-4 ">
             Youtube Mp3 Downloader 
            </h2>
            <p className="mb-4 mt-3  w-[80%] text-gray-700  sm:mx-auto sm:mt-5  md:mt-5 md:text-xl max-md:w-full ">
              With the audio downloader feature, you can extract the audio track
              from YouTube videos and save it as a separate audio file. This
              allows you to enjoy your favorite music, podcasts, or any other
              audio content offline, without the need for a video component.
            </p>
            {/* </AnimationOnScroll> */}
          </article>
        </section>
        <section className="mb-4 flex flex-row-reverse py-[100px] max-med:flex-col max-md:py-[50px] ">
          <article className=" flex flex-1 justify-center md:w-1/2">
            <motion.div
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={introPictureVariants}
            >
              <Image
                src={video}
                alt="Mp4 Downloader Free"
                className=" h-[300px] w-auto rounded-t-lg max-med:h-[250px]"
              />
            </motion.div>
          </article>

          <article className="ml-5 flex flex-1 flex-col justify-center text-start">
            {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
            <h2 className="mb-6  text-center text-4xl font-extrabold  text-gray-900 md:text-4xl lg:text-5xl max-med:mt-4 ">
             Youtube Video Downloader
            </h2>
            <p className="mb-4 mt-3 w-[80%] pr-4 text-gray-700 sm:mx-auto sm:mt-5 md:mt-5  md:text-xl max-md:w-full ">
              The video downloader feature enables you to download YouTube
              videos in various formats and resolutions. Whether you prefer
              high-definition videos or want to optimize the file size for your
              device, you can choose the desired video format before initiating
              the download process. This allows you to watch videos offline
              without an internet connection.
            </p>
            {/* </AnimationOnScroll> */}
          </article>
        </section>
        <section className="mb-4 flex max-med:flex-col ">
          <article className=" flex flex-1 justify-center md:w-1/2">
            <motion.div
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={introHeaderVariants}
            >
              <Image
                src={fast}
                alt="YouTube Online Downloader Free Mp4"
                className=" h-[300px] w-auto rounded-t-lg max-med:h-[250px]"
              />
            </motion.div>
          </article>

          <article className="ml-5 flex flex-1 flex-col justify-center text-start">
            {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
            <h2 className="mb-6  text-center text-4xl font-extrabold   text-gray-900 md:text-4xl lg:text-5xl max-med:mt-4 ">
              Server Side Downloader -- Ssaver
            </h2>
            <p className="mb-4 mt-3 w-[80%] text-gray-700  sm:mx-auto sm:mt-5 md:mt-5  md:text-xl max-md:w-full ">
              One standout feature of this YouTube downloader is its server-side
              fast downloading capability. By leveraging server-side resources,
              the downloader can process and retrieve videos or audio files
              swiftly, ensuring a quick and seamless download experience. This
              reduces the time you spend waiting for the download to complete,
              enhancing overall efficiency.
            </p>
            {/* </AnimationOnScroll> */}
          </article>
        </section>
        <section className=" flex flex-col ">
          <header className="py-10 text-center text-4xl">
            {" "}
            Why choose SSaver Downloader?
          </header>
          <section className="my-4 flex flex-col ">
            <div className="flex w-full border-b border-ACT items-center justify-center pb-3 my-4 max-med:flex-col ">
              <h3 className="font-semibold text-xl max-med:pb-4 flex-2">
                MP4 Downloader :{" "}
              </h3>{" "}
              <p className="text-xl pl-3 max-med:text-start flex-3">
                SSaver Downloader specializes in downloading videos in the
                popular MP4 format. Enjoy high-quality videos with just a few
                clicks!
              </p>
            </div>
            <div className="flex w-full border-b border-ACT items-center justify-center pb-3 my-4 max-med:flex-col ">
              <h3 className="font-semibold text-xl max-med:pb-4 flex-2">
                YouTube Downloader Online - MP4:{" "}
              </h3>{" "}
              <p className="text-xl pl-3 max-med:text-start flex-3">
                Our online tool ensures seamless downloading of YouTube videos
                in MP4. Experience lightning-fast downloads and superior video
                quality.
              </p>
            </div>
            <div className="flex w-full border-b border-ACT items-center justify-center pb-3 my-4 max-med:flex-col ">
              <h3 className="font-semibold text-xl max-med:pb-4 flex-2">
                Free YouTube to MP4 Downloader:{" "}
              </h3>{" "}
              <p className="text-xl pl-3 max-med:text-start flex-3">
                Yes, you read it right! SSaver Downloader offers free video
                downloads, allowing you to convert YouTube videos to MP4 format
                without any cost. Save your favorite videos without breaking the
                bank!
              </p>
            </div>
            <div className="flex w-full border-b border-ACT items-center justify-center pb-3 my-4 max-med:flex-col ">
              <h3 className="font-semibold text-xl max-med:pb-4 flex-2">
                YouTube Online Downloader MP4:{" "}
              </h3>{" "}
              <p className="text-xl pl-3 max-med:text-start flex-3">
                With SSaver Downloader, you can download YouTube videos online
                and save them in MP4 format. Our tool is compatible with various
                devices, ensuring a seamless experience every time.
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Mp4MainCard;
