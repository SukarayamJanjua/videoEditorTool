// components/Viewport.js
import React from 'react';
import styles from './ViewPort.module.css';

const Viewport = () => {
    return (
        <div className={styles.container}>
            <div className='demo-center'>
                <div className={styles.viewport}>
                    This is my viewport mate
                </div>
                {/* <div className='features' >
                    <div className='tools'>
                        Magic Tools
                    </div>
                    <div className='tools'>
                        Volume
                    </div>
                    <div className='tools'>
                        Speed
                    </div>
                    <div />
                </div>  */}
            </div>
            <div className="page info ">
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
            </div>
        </div>

    );
};

export default Viewport;

