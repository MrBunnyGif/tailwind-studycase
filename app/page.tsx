import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className="border-4 border-green-500 sm:text-base md:text-lg mb-3">
        Hello world!
      </h1>
      {/* using tailwindcss arbitrary values feature to set a background color that is not defined in the tailwindcss palette */}
      <h2 className="text-vueJs-1313 bg-[#bada55]">
        asd
      </h2>
    </>
  );
}
