import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="flex h-6">
        <div className="bg-red-400 w-1/2"></div>
        <div className="bg-blue-400 w-1/2"></div>
      </div>
      <div className="flex h-6">
        <div className="bg-blue-400 w-1/3"></div>
        <div className="bg-red-400 w-2/3"></div>
      </div>
      <div className="flex h-6">
        <div className="bg-red-400 w-6"></div>
        <div className="bg-blue-400 flex-auto"></div>
      </div>
    </>
  );
}
