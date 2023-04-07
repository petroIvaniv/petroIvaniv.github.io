import styles from './Orest.module.scss';
import ContainerComp from "./LiftingStateUp/ContainerComp";
import OrestForm from './Form/OrestForm';
import { Pagination } from 'rsuite';
import { useEffect, useState } from 'react';
// import { LocationApi } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationThunk} from "../../redux/actions/orestAction"
const Orest = ({Component}) => {
    const [activePage, setActivePage] = useState(1);
    const dispatch = useDispatch();
    const users = useSelector((store) => store.orest.results);
    const info = useSelector((store) => store.orest.info);
    const getLocation = (activePage) => dispatch(getLocationThunk(activePage));
    useEffect(()=>{
        getLocation(activePage);
    }, [activePage])
    // const [info, setInfo] = useState();
    // const [users, setUsers] = useState();
    // const getLocation = async () => {
    //     try {
    //         const {data} = await LocationApi.getLocation(activePage);
    //         setInfo(data.info);
    //         setUsers(data.results);
    //         console.log(data);
    //     } catch (e) {

    //     }
    // }
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