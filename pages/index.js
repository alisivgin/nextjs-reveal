import Head from "next/head"
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const Presentation = dynamic(() => import("../components/Presentation"), {
    ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
        <Presentation />
    </div>
  )
}
