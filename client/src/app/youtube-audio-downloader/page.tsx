import React from 'react'
import Mp4Downloder from './Mp3Downloader'
import Mp4MainCard from './PageContent'

export default function Mp3Download() {
  return (
    <main>
       <h1 className="mx-3 my-8 text-center text-4xl font-semibold text-[#434343] max-med:text-2xl ">
        Online Youtube Audio Downloder Mp4 - Ssaver
      </h1>
    <Mp4Downloder/>
    <Mp4MainCard/>
    </main>
  )
}
