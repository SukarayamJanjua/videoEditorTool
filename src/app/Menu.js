"use client"; // Ensure this file is treated as a client-side component

// import React, { useContext } from "react";
// import { StoreContext } from "@/store"; // Make sure this path is correct based on your project structure
// import { observer } from "mobx-react";
// import {
//   MdDownload,
//   MdVideoLibrary,
//   MdImage,
//   MdTransform,
//   MdTitle,
//   MdAudiotrack,
//   MdOutlineFormatColorFill,
//   MdMovieFilter,
// } from "react-icons/md";

export const Menu = observer(() => {
//   const store = useContext(StoreContext);

  return (
    <ul className="bg-white h-full">
      {MENU_OPTIONS.map((option) => {
        const isSelected = store.selectedMenuOption === option.name;
        return (
          <li
            key={option.name}
            className={`h-[72px] w-[72px] flex flex-col items-center justify-center ${isSelected ? "bg-slate-200" : ""}`}
          >
            <button
              onClick={() => option.action(store)}
              className={`flex flex-col items-center`}
            >
              <option.icon
                size="20"
                color={isSelected ? "#000" : "#444"}
              />
              <div
                className={`text-[0.6rem] hover:text-black ${isSelected ? "text-black" : "text-slate-600"}`}
              >
                {option.name}
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
});

const MENU_OPTIONS = [
  {
    name: "Video",
    icon: MdVideoLibrary,
    action: (store) => {
      store.setSelectedMenuOption("Video");
    },
  },
  {
    name: "Audio",
    icon: MdAudiotrack,
    action: (store) => {
      store.setSelectedMenuOption("Audio");
    },
  },
  {
    name: "Image",
    icon: MdImage,
    action: (store) => {
      store.setSelectedMenuOption("Image");
    },
  },
  {
    name: "Text",
    icon: MdTitle,
    action: (store) => {
      store.setSelectedMenuOption("Text");
    },
  },
  {
    name: "Animation",
    icon: MdTransform,
    action: (store) => {
      store.setSelectedMenuOption("Animation");
    },
  },
  {
    name: "Effect",
    icon: MdMovieFilter,
    action: (store) => {
      store.setSelectedMenuOption("Effect");
    },
  },
  {
    name: "Fill",
    icon: MdOutlineFormatColorFill,
    action: (store) => {
      store.setSelectedMenuOption("Fill");
    },
  },
  {
    name: "Export",
    icon: MdDownload,
    action: (store) => {
      store.setSelectedMenuOption("Export");
    },
  },
];
