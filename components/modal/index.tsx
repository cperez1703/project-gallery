import {useEffect,useRef} from 'react'
import styles from "./style.module.css"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    open: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 1]}}
}

const Modal = ({
    modal, 
    projects
}: {
    modal: any,
    projects: any,
}) => {
    const { active, index } = modal;
    const container = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    useEffect(() => {
        const moveContainerX = gsap.quickTo(container.current, "left", {duration: 0.8, ease: "power3"});
        const moveContainerY = gsap.quickTo(container.current, "top", {duration: 0.8, ease: "power3"});

        const cursorX = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"});
        const cursorY = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"});

        const cursorLabelX = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"});
        const cursorLabelY = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"});

        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            moveContainerX(clientX);
            moveContainerY(clientY);

            cursorX(clientX);
            cursorY(clientY);

            cursorLabelX(clientX);
            cursorLabelY(clientY);
        })
    },[])

    return (
        <>
            <motion.div 
                ref={container}
                variants={scaleAnimation} 
                initial={"initial"} 
                animate={active? "open" : "closed"}
                className={styles.modalContainer}
            >
                <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
                    {
                        projects.map((project: any,index: any) => {
                            const { src, color } = project;
                            return (
                                <div 
                                key={`modal_${index}`}
                                    className={styles.modal}
                                    style={{backgroundColor: color}}
                                >
                                    <Image
                                        src={`/${src}`}
                                        width={300}
                                        height={0}
                                        alt="image"
                                        />
                                </div>
                            )

                        })
                    }
                </div>
            </motion.div>
            <motion.div 
                className={styles.cursor}
                ref={cursor}
                variants={scaleAnimation} 
                initial={"initial"} 
                animate={active? "open" : "closed"}
            >    
            </motion.div>
            <motion.div 
                className={styles.cursorLabel}
                ref={cursorLabel}
                variants={scaleAnimation} 
                initial={"initial"} 
                animate={active? "open" : "closed"}
            >
                View
            </motion.div>
        </>
  )
}

export default Modal;