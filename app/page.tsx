import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container space-y-1" >
      <div className="bg-slate-600 aspect-video"></div>
      <div className="bg-red-400 aspect-square"></div>
    </div >
  );
}
