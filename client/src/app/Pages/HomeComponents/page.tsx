import React from "react";
import DownloadFunc from "./downloadFunc";
import MainCard from "./HomeContent";

export default function HomeComponents() {
  return (
    <main>
      {" "}
      <h1 className="mx-3 my-8 text-center text-4xl font-semibold text-[#434343] max-med:text-2xl ">
        Free Youtube Video and Audio Downloder - Ssaver
      </h1>
      <DownloadFunc />
      <MainCard />
    </main>
  );
}
