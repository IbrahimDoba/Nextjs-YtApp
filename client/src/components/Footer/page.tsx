import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="/" className="text-3xl hover:text-ACT ">
          SSaver
        </a>
        <a className="text-xl text-gray-800 hover:text-ACT" href="/Contact">
          contact
        </a>
        <a className="text-xl text-gray-800 hover:text-ACT" href="/privacy">
          Privacy Policy
        </a>
        <a
          className="max-md:w-[200px] text-xl text-gray-800 hover:text-ACT"
          href="/terms"
        >
          Terms & Conditions
        </a>
      </div>
      <hr />
      <div className="w-full items-center text-center">
        <small>@2023 SSaver. all rights reserved. by Ibrahim Doba.</small>
      </div>
    </footer>
  );
}
