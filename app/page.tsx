import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="Parent">
      <div>Header</div>

      <div className="flex flex-row-reverse">
        <div>
          Main content
        </div>
        <div className="flex flex-col">
          <div>Sidebar</div>
          <div>menu</div>
        </div>
      </div>
    </div>
  );
}
