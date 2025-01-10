"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }
  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-slate-800 min-h-96`}>
      <p className="dark:text-white">

        hello
      </p>
      <button className="px-4 py-2 bg-slate-400 rounded dark:bg-gray-50" onClick={() => toggleDarkMode()}>toggle dark mode</button>
    </div>
  );
}
