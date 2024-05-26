"use client"
// import Image from "next/image";
import Head from "next/head";
import Link from 'next/link';
import NavBar from "./navbar";
import Home from "./Home";
// import { Menu } from "./Menu";
import Footer from "./Components/Footer";
import FileUploader from "./Components/FileUploader";
import { useState } from "react";

// import UploadAndTrim from "./UploadAndTrim";
export default function MyApp() {
  const [isUploaderVisible, setIsUploaderVisible] = useState(true);

  const handleCloseUploader = () => {
    setIsUploaderVisible(false);
  };
  return (
    <>
      <Head>
        <title>Audio Cutter</title>

      </Head>
      <div>
        <div className="app-menu-burger">
          <button className="link">
            <svg aria-hidden="true" width="2em" height="2em" fill="currentColor" stroke="">
              <use xlinkHref="#icon-menu-burger"></use>
            </svg>
          </button>
        </div>
        <div className="center">
        <NavBar />
          {/* <Menu/> */}
          <div>
          {/* <div className='openUploader'>
            {isUploaderVisible && <FileUploader onClose={handleCloseUploader} />}
            {!isUploaderVisible && <button onClick={() => setIsUploaderVisible(true)}>Open Uploader</button>}
          </div> */}
            <Home />
            <Footer />
            </div >
          </div>
        </div>
      </>
      );
}
