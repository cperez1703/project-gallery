"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Project from "@/components/project";
import Modal from "@/components/modal";

export default function Home() {
  
  const projects = [
    {
      title: "Cat Womp Womp",
      src: "crying_cat_womp_womp.png",
      color: "#000000"
    },
    {
      title: "Crying Kitty",
      src: "crying_cat.png",
      color: "#FFFFFF"
    },
    {
      title: "Sad Cat",
      src: "sad_cry_cat.png",
      color: "#000000"
    },
    {
      title: "Another Cat",
      src: "another_crying_cat.png",
      color: "#FFFFFF"
    }
  ]

  const [modal, setModal] = useState({active:false, index:0});

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {
          projects.map((project, index) => {
            return <Project key={index} index={index} title={project.title} setModal={setModal}/>
          })
        }
      </div>
      <Modal modal={modal} projects={projects}/>
    </main>
  );
}
