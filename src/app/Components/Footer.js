"use client";
// components/Footer.js
import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import styles from './Footer.module.css';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTools}>
        
        <div> <ContentCutIcon/>Split </div>
        <div> <p> <DownloadIcon/> Download Section - 0:15- 1:33</p> </div>
        {/* <p>This is the toolbox section, all the tools can be added here</p> */}
        <div> <SearchIcon/>Search </div>
        <div> <SettingsIcon/>Settings </div>
      </div>
      <div className={styles.timelineContainer}>
        <Draggable axis="x">
          <div className={styles.draggableWrapper}>
            <ResizableBox
              className={styles.resizable}
              width={300}
              height={50}
              minConstraints={[100, 50]}
              maxConstraints={[800, 50]}
              axis="x"
              handle={<span className={styles.resizableHandle} />}
            >
              <div className={styles.timeline}>
                <div className={styles.timelineLabel}>Video Timeline</div>
              </div>
            </ResizableBox>
          </div>
        </Draggable>

        <Draggable axis="x">
          <div className={styles.draggableWrapper}>
            <ResizableBox
              className={styles.resizable}
              width={300}
              height={50}
              minConstraints={[100, 50]}
              maxConstraints={[800, 50]}
              axis="x"
              handle={<span className={styles.resizableHandle} />}
            >
              <div className={styles.timeline}>
                <div className={styles.timelineLabel}>Audio Timeline</div>
              </div>
            </ResizableBox>
          </div>
        </Draggable>
      </div>
    </footer>
  );
};

export default Footer;
