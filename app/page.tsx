import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container space-y-1" >
      {/* This shadow will NOT be red at medium screens and above */}
      <div className="bg-slate-600 aspect-video shadow-lg shadow-red-500 md:shadow-xl hover:scale-105 transition delay-100"></div>
      {/* This shadow WILL be red at medium screens and above */}
      <div className="bg-red-400 aspect-square shadow-lg shadow-red-500 md:shadow-xl md:shadow-red-500 hover:-translate-y-1/3 transition delay-100">
        <button className="animate-spin"> spin</button>
        <br />
        <button className="animate-ping"> ping</button>
        <br />
        <button className="animate-pulse"> pulse</button>
        <br />
        <button className="animate-bounce"> bounce</button>
      </div>
    </div >
  );
}
