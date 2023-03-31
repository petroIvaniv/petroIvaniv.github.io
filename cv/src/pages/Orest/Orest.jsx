import styles from './Orest.module.scss'
import ContainerComp from "./LiftingStateUp/ContainerComp"
import OrestForm from './Form/OrestForm'
const Orest = () => {
    return(
        <div>
            <h1 className={styles.title}>Orest</h1>
            <ContainerComp/>
            <OrestForm/>
        </div>
    )
}
export default Orest