import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className=" container border">

      <h1 className="">Welcome to my page</h1>
      <h2 className={""}>
        Get started by editing <code>app/page.tsx</code>
      </h2>
      <p className="text-base">
        <a href="https://nextjs.org/docs" className={styles.link}>
          Learn more about Next.js
        </a>
      </p>
      <button className={styles.button}>Click me</button> <br />
      <input type="text" className={styles.input} placeholder="Type something" /><br />
      <input type="checkbox" className={styles.input} /><br />
      <select className={styles.input}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}
