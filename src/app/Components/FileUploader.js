"use client"

// components/FileUploader.js
import React , {useState} from 'react';
import styles from './FileUploader.module.css';
import { useRef } from 'react';

const FileUploader = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && (selectedFile.type.startsWith('audio/') || selectedFile.type.startsWith('video/'))) {
      setFile(selectedFile);
      setUploadStatus('');
    } else {
      setUploadStatus('Please select a valid audio or video file.');
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      setUploadStatus('No file selected for upload.');
      return;
    }

    try {
      setUploadStatus('Uploading...');
      // Perform the file upload. Replace with your own upload logic.
      // For demonstration, we'll use a timeout to simulate an upload.
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUploadStatus('File uploaded successfully.');
    } catch (error) {
      setUploadStatus('File upload failed. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.uploader}>
        <button aria-labelledby="button-label" className={styles.closeButton} onClick={onClose}>
          <span id="button-label" hidden>Close</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#5C5E65" className={styles.closeIcon}>
            <path d="M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.title}>Add Audio to Video</span>
          </div>
          <div role="presentation" className={styles.uploadArea}>
            <div data-testid="@upload-file" className={styles.uploadBox}>
              <div className={styles.uploadIconText}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" className={styles.uploadIcon}>
                  <path d="M16 16L12 12L8 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 12V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M20.39 18.39C21.3653 17.8583 22.1358 17.0169 22.5799 15.9986C23.0239 14.9804 23.1162 13.8432 22.8422 12.7667C22.5682 11.6902 21.9435 10.7355 21.0667 10.0535C20.1899 9.3714 19.1109 9.00075 18 9.00001H16.74C16.4373 7.82926 15.8732 6.74235 15.09 5.82101C14.3067 4.89967 13.3249 4.16786 12.2181 3.68062C11.1114 3.19338 9.90856 2.96337 8.70012 3.0079C7.49169 3.05242 6.30907 3.37031 5.24118 3.93768C4.17329 4.50505 3.24792 5.30712 2.53463 6.2836C1.82134 7.26008 1.3387 8.38555 1.12299 9.57541C0.907276 10.7653 0.964111 11.9885 1.28922 13.1533C1.61433 14.318 2.19925 15.3939 3.00001 16.3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M16 16L12 12L8 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span>Upload a File</span>
              </div>
              <div className={styles.dragDrop}>
                <span>Drag &amp; drop a file or <button className={styles.importButton} onClick={() => fileInputRef.current.click()}>import from a link</button></span>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*,video/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
          </div>
          {file && <div className={styles.fileInfo}>Selected file: {file.name}</div>}
          {uploadStatus && <div className={styles.uploadStatus}>{uploadStatus}</div>}
          <button className={styles.uploadButton} onClick={() => fileInputRef.current.click()}>Upload</button>
          {file && <button className={styles.uploadButton} onClick={handleFileUpload}>Submit</button>}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;