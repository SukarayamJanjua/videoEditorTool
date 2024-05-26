// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="tile row-span-2 flex flex-col">
      <ul className="bg-white h-full">
        <li className="h-[72px] w-[72px] flex flex-col items-center justify-center bg-slate-200">
          <button className="flex flex-col items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#000" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(0, 0, 0)' }}>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
            </svg>
            <div className="text-[0.6rem] hover:text-black text-black">Video</div>
          </button>
        </li>
        <li className="h-[72px] w-[72px] flex flex-col items-center justify-center">
          <button className="flex flex-col items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#444" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(68, 68, 68)' }}>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 3v9.28a4.39 4.39 0 00-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"></path>
            </svg>
            <div className="text-[0.6rem] hover:text-black text-slate-600">Audio</div>
          </button>
        </li>
        <li className="h-[72px] w-[72px] flex flex-col items-center justify-center">
          <button className="flex flex-col items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#444" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(68, 68, 68)' }}>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
            </svg>
            <div className="text-[0.6rem] hover:text-black text-slate-600">Image</div>
          </button>
        </li>
        <li className="h-[72px] w-[72px] flex flex-col items-center justify-center">
          <button className="flex flex-col items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#444" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(68, 68, 68)' }}>
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M5 4v3h5.5v12h3V7H19V4z"></path>
            </svg>
            <div className="text-[0.6rem] hover:text-black text-slate-600">Text</div>
          </button>
        </li>
        <li className="h-[72px] w-[72px] flex flex-col items-center justify-center">
          <button className="flex flex-col items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#444" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(68, 68, 68)' }}>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"></path>
            </svg>
            <div className="text-[0.6rem] hover:text-black text-slate-600">Animation</div>
          </button>
        </li>
        <li className="h-[72px] w-[72px] flex flex-col items-center justify-center">
          <button className="flex flex-col items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#444" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(68, 68, 68)' }}>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"></path>
            </svg>
            <div className="text-[0.6rem] hover:text-black text-slate-600">Effect</div>
          </button>
        </li>
        <li className="h-[72px] w-[72px] flex flex-col items-center justify-center">
          <button className="flex flex-col items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#444" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(68, 68, 68)' }}>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15a1.49 1.49 0 000 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5zM2 20h20v4H2v-4z"></path>
            </svg>
            <div className="text-[0.6rem] hover:text-black text-slate-600">Fill</div>
          </button>
        </li>
        <li className="h-[72px] w-[72px] flex flex-col items-center justify-center">
          <button className="flex flex-col items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#444" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(68, 68, 68)' }}>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
            </svg>
            <div className="text-[0.6rem] hover:text-black text-slate-600">Export</div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
