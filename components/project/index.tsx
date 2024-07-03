import styles from "./style.module.css"

const Project = ({
    index,
    title,
    setModal,
}: {
    index: any,
    title: any,
    setModal: any
}) => {
    return ( 
        <div 
            className={styles.project} 
            onMouseEnter={() => {setModal({active:true,index:index})}}
            onMouseLeave={() => {setModal({active:false,index:index})}}
        >
            <h2>{title}</h2>
            <p>Cats and Things</p>
        </div>
     );
}
 
export default Project