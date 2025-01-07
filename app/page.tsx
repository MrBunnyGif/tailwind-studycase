import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl italic">qwerty</h1>
      <h1 className="text-2xl underline decoration-wavy underline-offset-8 leading-loose">qwerty</h1>
      <h1 className="text-xl line-through decoration-double decoration-red-600 leading-normal">qwerty</h1>
      <h2 className="text-base overline decoration-dotted decoration-4">asdf</h2>
      <h3 className="text-sm">zxcvb</h3>
      <p className="text-xs">paragraph here</p>
    </>
  );
}
