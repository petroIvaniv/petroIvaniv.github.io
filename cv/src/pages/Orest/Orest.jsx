import styles from './Orest.module.scss';
import ContainerComp from "./LiftingStateUp/ContainerComp";
import OrestForm from './Form/OrestForm';
import { Pagination } from 'rsuite';
import { useEffect, useState } from 'react';
import { LocationApi } from '../../api/api';
const Orest = ({Component}) => {
    const [activePage, setActivePage] = useState(1);
    const [info, setInfo] = useState();
    const [users, setUsers] = useState();
    const getLocation = async () => {
        try {
            const {data} = await LocationApi.getLocation(activePage);
            setInfo(data.info);
            setUsers(data.results);
            console.log(data);
        } catch (e) {

        }
    }
    useEffect(()=>{
        getLocation();
    }, [activePage])
    return(
        <div>
            <Pagination
                prev
                last
                next
                first
                size = "xs"
                total = {info?.count}
                limit = {18}
                maxButtons={7}
                activePage={activePage}
                onChangePage={setActivePage}
                />
                <Component
                    users={users}
                />
            <h1 className={styles.title}>Orest</h1>
            <ContainerComp/>
            <OrestForm/>
        </div>
    )
}
export default Orest