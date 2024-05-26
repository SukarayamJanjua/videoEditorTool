"use client"

// import UploadAndTrim from './Components/UploadAndTrim.js';
import FileUploader from './Components/FileUploader.js';
import { useState } from 'react';
import Footer from './Components/Footer.js';
import Viewport from './Components/Viewport.js';
// import MainLayout from './Components/mainLayout.js';

const Home = (Component, pageProps) => {
  const [isUploaderVisible, setIsUploaderVisible] = useState(true);

  const handleCloseUploader = () => {
    setIsUploaderVisible(false);
  };
  return (
    <>
      <main className="pages">
        <div className='signIn'>
          <p>Save your projects for later- <a>SignIn</a> or<a> LogIn </a></p>
        </div>
        <div className="page centered">
          {/* <MainLayout>
            <Component {...pageProps} />
          </MainLayout> */}
          <div className="top-menu sticky">
            <menu>
              <li><a> VIDEODUBBER.AI -<p> Effortlessly Edit your videos </p></a></li>
              {/* <li><a href="/joiner" className="">Joiner</a></li> */}
            </menu>
          </div>
          <div className='openUploader'>
            {isUploaderVisible && <FileUploader onClose={handleCloseUploader} />}
            {!isUploaderVisible && <button onClick={() => setIsUploaderVisible(true)}>Open Uploader</button>}
          </div>
          <Viewport />
          {/* <div className="page info ">
            <h2>How to cut audio</h2>
            <p>
              This app can be used to trim and/or cut audio tracks, remove an audio fragment.
              Fade in and fade out your music easily to make the audio harmoniously.
              <br /><br />
              It is fast and easy to use. You can save the audio file in any format
              (codec parameters are configured)
              <br /><br />
              It works directly in the browser, no need to install any software,
              and is available for mobile devices.
            </p>
            <h4>
              <svg aria-hidden="true" width="1em" height="1em" fill="currentColor" stroke="currentColor">
                <use xlinkHref="#icon-security"></use>
              </svg>
              Privacy and Security Guaranteed
            </h4>
            <p>This is a serverless app. Your files do not leave your device</p>
          </div> */}
        </div>

      </main>
    </>
  )
}

export default Home;