import React from 'react'
import Mp4Downloder from './Mp4Downloader'
import Mp4MainCard from './PageContent'

export default function Mp4Download() {
  return (
    <main>
       <h1 className="mx-3 my-8 text-center text-4xl font-semibold text-[#434343] max-med:text-2xl ">
        Online Youtube Video Downloder Mp4 - Ssaver
      </h1>
    <Mp4Downloder/>
    <Mp4MainCard/>
    </main>
  )
}
