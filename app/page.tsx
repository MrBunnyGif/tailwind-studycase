import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container bg-red-500" >
      {/* The "container" class in Tailwind CSS centers the content and applies responsive padding according to the screen size */}
      <h1>Hello</h1>
    </div >
  );
}
