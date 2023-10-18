"use client";
import axios from "axios";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { FC } from "react";

interface AlertModalProps {
  message: String;
  onClose: () => void;
}
interface Thumbnail {
  url: string;
}
interface VideoDetails {
  title: string;
  thumbnail: {
    thumbnails: Thumbnail[];
  };

  // Add other properties as needed
}

interface Format {
  qualityLabel: string;
  mimeType: string;
  audioQuality: string;
  url: string;
  // Add other properties as needed
}

export default function DownloadFunc() {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [videoInfo, setVideoInfo] = useState<VideoDetails[]>([]);
  const [testData, setTestData] = useState<Format[]>([]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [downloadMp3, setDownloadMp3] = useState<string[]>([]);
  const [getTestData, setGetTestData] = useState<Format[]>([]);

  const [isloading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showDrop, setShowDrop] = useState(false);

  const [clickGetUrl, setClickGetUrl] = useState<null | string>(null);

  const AlertModal: FC<AlertModalProps> = ({ message, onClose }) => {
    return (
      <div className="fixed inset-0 flex  items-center justify-center border bg-gray-300/75 ">
        <div className=" flex h-[200px] w-[400px] flex-col justify-between rounded-lg bg-white p-6 shadow-2xl max-md:w-[350px]">
          <p className="text-center text-2xl">{message}</p>

          <button
            className="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none"
            onClick={onClose}
          >
            close
          </button>
        </div>
      </div>
    );
  };

  // remove string after underscore
  const removeString = () => {
    const modifiedUrl = videoUrl.split("_channel")[0];
    setVideoUrl(modifiedUrl);
  };
  // create modal for notifications

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };
  // handle dropdown item click
  const handleDropClick = () => {
    setShowDrop(!showDrop);
  };

  // submit function and get info of url
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    removeString();
    try {
      if (videoUrl === "") {
        setModalMessage("YouTube Link Is Missing!");
        setShowModal(true);
        setIsLoading(false);
        return;
      }
      await axios.post(
        "https://youtube-saver.onrender.com/youtube-video-details",
        {
          url: videoUrl,
        }
      );

      await testDownload();
      setIsLoading(false);
    } catch (error) {
      if (error) {
        setModalMessage("Invalid link");
        setShowModal(true);
        setIsLoading(false);
      }
    }
  };
  const testDownload = async () => {
    const res = await axios.post(
      "https://youtube-saver.onrender.com/test-download",
      {
        url: videoUrl,
      }
    );

    try {
      setVideoInfo([res.data.videoDetails]);
      console.log("videoinfo", videoInfo);

      setTestData(res.data.formats);
      setNewTitle(res.data.videoDetails.title);
      console.log(testData);
      console.log("alldatas", res);

      const testQLtoMatch = [
        "1440p60",
        "1080p60",
        "1080p",
        "720p",
        "480p",
        "360p",
        "240p",
      ];
      const AudioData = res.data.formats.filter(
        (data: Format) =>
          data.mimeType.includes("audio/mp4") &&
          data.audioQuality.includes("AUDIO_QUALITY_MEDIUM")
      );

      setDownloadMp3([AudioData[0].url]);

      console.log("auidoos here", AudioData);

      const allMatchData = res.data.formats.filter(
        (data: Format) =>
          testQLtoMatch.includes(data.qualityLabel) &&
          data.mimeType.includes("mp4a.40.2")
      );
      console.log("vide with audio", allMatchData);
      setGetTestData(allMatchData);
    } catch (err) {
      console.log(err);
    }
  };

  //   const testDownloadMp3 = async () => {
  //     try {
  //       if (audioRef.current) {
  //         audioRef.current.click();
  //         console.log(audioRef, "Audio link cliccked");
  //       }
  //       console.log("u0rlaudi here", donwloadMp3);
  //     } catch (err) {}
  //   };

  const handleDropItemClick = (qualityLabel: string) => {
    let getUrl = getTestData
      .filter((data: Format) => data.qualityLabel === qualityLabel)
      .map((data: Format) => data.url);

    console.log(`Clickurldata ${qualityLabel}`, clickGetUrl);

    setClickGetUrl((prevClick) => getUrl[0]);

    console.log(`Clicked ${qualityLabel}`, getUrl);
  };
  //   useEffect(() => {
  //     console.log("updatedCLick", clickGetUrl);

  //     if (clickGetUrl) {
  //       console.log("sameclick as geturl");
  //       if (linkRef.current) {
  //         linkRef.current.click();
  //         console.log(linkRef, "link cliccked");
  //       }
  //     }
  //   }, [clickGetUrl]);

  const clearSearch = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const res = await axios.get(
      "https://youtube-saver.onrender.com/clear-url",
      {
        params: {
          url: "",
        },
      }
    );

    console.log("cleardata", res.data);
    setClickGetUrl("");
    setGetTestData([]);
    setVideoInfo([]);
    setVideoUrl("");
    setIsLoading(false);
  };
  const selectedMp3Url = downloadMp3.length > 0 ? downloadMp3[0] : "";
  const hrefValue = clickGetUrl || "";
  return (
    <div className="flex flex-col items-center  bg-[#ffffff]">
      <form
        onSubmit={handleSubmit}
        className=" mx-auto my-6  lg:min-w-[600px] max-md:w-[80%]"
      >
        {showModal && (
          <AlertModal message={modalMessage} onClose={closeModal} />
        )}
        <div className="flex items-center  border-b-2 border-[#93dc99] py-2">
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="mr-3 w-full  appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
            placeholder="Enter Youtube URL"
          />
          <button
            onClick={clearSearch}
            className="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none max-md:px-2 max-md:text-sm"
          >
            Clear
          </button>
          <button
            type="submit"
            className="focus:shadow-outline ml-4 rounded bg-[#93dc99] px-4 py-2 font-bold text-TXT hover:bg-ACT focus:outline-none max-md:px-2 max-md:text-sm"
          >
            Search
          </button>
        </div>
      </form>
      {isloading ? (
        <div className="flex min-h-[500px] min-w-[800px] flex-col items-center justify-center border bg-white">
          <div role="status">
            <svg
              aria-hidden="true"
              className="h-13 dark:text-white-600 mr-2 w-12 animate-spin fill-blue-600 text-gray-200"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-3 text-lg font-semibold">Loading....</p>
        </div>
      ) : (
        <>
          {videoInfo && videoInfo.length > 0 ? (
            videoInfo.map((video, index) => (
              <div
                key={index}
                className="flex min-h-[500px] min-w-[800px] flex-col items-center justify-center border bg-white max-lg:min-w-[650px] max-md:min-h-[250px] max-md:min-w-[350px]"
              >
                <Image
                  width={800}
                  height={500}
                  className="w-[80%] object-contain  "
                  src={
                    video.thumbnail.thumbnails[4].url ||
                    video.thumbnail.thumbnails[3].url ||
                    video.thumbnail.thumbnails[2].url
                  }
                  alt="thumbnail"
                />
                <h2 className="mx-4 mt-4 text-2xl font-semibold max-md:text-sm">
                  {video.title}
                </h2>
              </div>
            ))
          ) : (
            <div className="  flex min-h-[250px] min-w-[800px] items-center justify-center border bg-white max-lg:min-w-[650px] max-md:min-h-[150px] max-md:min-w-[350px]">
              <span className="text-xl font-semibold">No image available</span>
            </div>
          )}
        </>
      )}
      <div className="  mt-6 flex w-[450px] justify-between  max-md:w-full max-md:justify-around">
        <button
          // disabled={videoToMp3}
          //   onClick={testDownloadMp3}
          className="focus:shadow-outline max-h-[40px] rounded bg-[#93dc99] px-4 py-2 font-bold text-TXT hover:bg-ACT max-md:max-h-[40px] max-md:w-[150px] max-md:px-2
          max-md:text-sm "
        >
          <a
            href={selectedMp3Url}
            target="_blank"
            rel="noopener noreferrer"
            download={newTitle + ".mp3"}
            // disabled={!selectedMp3Url}
          >
            {" "}
            Download Audio
          </a>
        </button>
        <div className="flex flex-col items-end ">
          <button
            onClick={handleDropClick}
            className="focus:shadow-outline flex items-center rounded bg-[#93dc99] px-4 py-2 font-bold text-TXT  hover:bg-ACT
            max-md:text-sm "
          >
            Download Video
            {/* <AiOutlineDown className="ml-4" /> */}
          </button>

          {showDrop && (
            <div className={` mt-2 grid grid-cols-2 ${showModal ? "" : ""}  `}>
              <button
                className={`mt-3 block rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                  getTestData.filter((data) => data.qualityLabel === "240p")
                    .length === 0
                    ? "hidden "
                    : ""
                }`}
                onClick={() => handleDropItemClick("240p")}
                disabled={
                  getTestData.filter((data) => data.qualityLabel === "240p")
                    .length === 0 || showModal
                }
              >
                <a
                  href={hrefValue}
                  target="_blank"
                  rel="noopener noreferrer"
                  //   ref={linkRef}
                  download={newTitle}
                  //   disabled={true}
                >
                  {" "}
                  240p
                </a>
              </button>
              <button
                className={`ml-3 mt-3 block rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                  getTestData.filter((data) => data.qualityLabel === "360p")
                    .length === 0
                    ? "hidden "
                    : ""
                }`}
                onClick={() => handleDropItemClick("360p")}
                disabled={
                  getTestData.filter((data) => data.qualityLabel === "360p")
                    .length === 0 || showModal
                }
              >
                <a
                  href={hrefValue}
                  target="_blank"
                  rel="noopener noreferrer"
                  //   ref={linkRef}
                  download={newTitle}
                  //   disabled={true}
                >
                  {" "}
                  360p
                </a>
              </button>
              <button
                className={`mt-3 block rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                  getTestData.filter((data) => data.qualityLabel === "480p")
                    .length === 0
                    ? "hidden "
                    : ""
                }`}
                onClick={() => handleDropItemClick("480p")}
                disabled={
                  getTestData.filter((data) => data.qualityLabel === "480p")
                    .length === 0 || showModal
                }
              >
                <a
                  href={hrefValue}
                  target="_blank"
                  rel="noopener noreferrer"
                  //   ref={linkRef}
                  download={newTitle}
                >
                  {" "}
                  480p
                </a>
              </button>
              <button
                className={`ml-3 mt-3 block rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                  getTestData.filter((data) => data.qualityLabel === "720p")
                    .length === 0
                    ? " hidden "
                    : ""
                }`}
                onClick={() => handleDropItemClick("720p")}
                disabled={
                  getTestData.filter((data) => data.qualityLabel === "720p")
                    .length === 0 || showModal
                }
              >
                <a
                  href={hrefValue}
                  target="_blank"
                  rel="noopener noreferrer"
                  //   ref={linkRef}
                  download={newTitle}
                >
                  {" "}
                  720p
                </a>
              </button>
              <button
                className={`mt-3 block rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                  getTestData.filter((data) => data.qualityLabel === "1080p")
                    .length === 0
                    ? "hidden "
                    : ""
                }`}
                onClick={() => handleDropItemClick("1080p")}
                disabled={
                  getTestData.filter((data) => data.qualityLabel === "1080p")
                    .length === 0 || showModal
                }
              >
                <a
                  href={hrefValue}
                  target="_blank"
                  rel="noopener noreferrer"
                  //   ref={linkRef}
                  download={newTitle}
                >
                  {" "}
                  1080p
                </a>
              </button>

              <button
                className={`ml-3 mt-3 block rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                  getTestData.filter((data) => data.qualityLabel === "1440p60")
                    .length === 0
                    ? "hidden "
                    : ""
                }`}
                onClick={() => handleDropItemClick("1440p60")}
                disabled={
                  getTestData.filter((data) => data.qualityLabel === "1440p60")
                    .length === 0 || showModal
                }
              >
                <a
                  href={hrefValue}
                  target="_blank"
                  rel="noopener noreferrer"
                  //   ref={linkRef}
                  download={newTitle}
                >
                  {" "}
                  1440p
                </a>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
