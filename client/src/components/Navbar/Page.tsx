"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Navbar() {

  const pathname = usePathname();

  return (
    <nav >
    <div >
      <div className="flex items-center justify-around flex-1">
        {/* <img src="ssaver-logo.png" alt="SSsaver Logo" className="h-8 w-8 mr-2" /> */}
        <Link href="/" className={`text-4xl max-md:text-xl font-extrabold text-[#302703] ${pathname === "/" ? "text-white" : "text-#302703"}`}>
          SSaver
        </Link>
        <Link
          href="/youtube-video-downloader"
          className={`text-[#302703]  hover:text-white text-sm text-center mx-2 transition duration-300  ${pathname === "/youtube-video-downloader" ? "text-white" : "text-#302703"}`}
        >
          Video Downloader
        </Link>
        <Link
          href="/youtube-audio-downloader"
          className={`text-[#302703]  hover:text-white text-sm text-center mx-2 transition duration-300  ${pathname === "/youtube-audio-downloader" ? "text-white" : "text-#302703"}`}
        >
          Audio Downloader
        </Link>
      </div>
      <div className="flex w-1/3 items-end justify-end flex-1">
       
        <a
          href="/contact"
          className="text-[#302703]  hover:text-white transition duration-300"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
  )
}
