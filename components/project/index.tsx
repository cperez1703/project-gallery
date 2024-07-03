import styles from "./style.module.css"
import { useState } from "react";
import Modal from "../modal";

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


const Project = () => {
    const [modal, setModal] = useState({active:false, index:0});

    return ( 
        <main className={styles.main}>
            <div className={styles.body}>
                {
                    projects.map((project, index) => {
                        return (
                            <div 
                                className={styles.project}  
                                onMouseEnter={() => {setModal({active:true,index:index})}}
                                onMouseLeave={() => {setModal({active:false,index:index})}}
                            >
                            <h2>{project.title}</h2>
                            <p>Cats and Things</p>
                        </div>
                        );
                    })
                }
            </div>
        <Modal modal={modal} projects={projects}/>
      </main>
    )
}
 
export default Project