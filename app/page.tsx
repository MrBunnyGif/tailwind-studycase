import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container space-y-1" >
      {/* This shadow will NOT be red at medium screens and above */}
      <div className="bg-slate-600 aspect-video shadow-lg shadow-red-500 md:shadow-xl"></div>
      {/* This shadow WILL be red at medium screens and above */}
      <div className="bg-red-400 aspect-square shadow-lg shadow-red-500 md:shadow-xl md:shadow-red-500"></div>
    </div >
  );
}
