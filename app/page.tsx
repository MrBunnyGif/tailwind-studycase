import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen gap-4">
        <div className="bg-red-400 w-1/5">
          <p>oi</p>
        </div>
        <div className="bg-blue-400 flex-auto">
          <p>asdasddsa</p>
          <br /><p>asdasddsa</p>
          <br /><p>asdasddsa</p>
          <br /><p>asdasddsa</p>
          <br />
        </div>
      </div>
    </>
  );
}
