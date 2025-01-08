import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="grid grid-cols-4 border gap-1">
      <div className="border">div 1</div>
      <div className="border col-span-3">div 2</div>
      <div className="border col-span-2">div 3</div>
      <div className="border col-span-3">div 4</div>
      <div className="border">div 5</div>
    </div>
  );
}
