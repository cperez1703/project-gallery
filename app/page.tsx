"use client";
import styles from "./page.module.css";
import Project from "@/components/project";
import Landing from "@/components/landing";

export default function Home() {


  return (
    <main className={styles.main}>
      {/* <Landing/> */}
      <Project/>
    </main>
  );
}
