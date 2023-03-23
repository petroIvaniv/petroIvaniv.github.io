import styles from './Orest.module.scss'
import ContainerComp from "./LiftingStateUp/ContainerComp"
const Orest = () => {
    return(
        <div>
            <h1 className={styles.title}>Orest</h1>
            <ContainerComp/>
        </div>
    )
}
export default Orest