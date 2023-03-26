import './Andriy.module.scss'
import {Pagination} from "rsuite";
import {useEffect, useState} from "react";
import {CharacterApi, EpisodeApi} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {andriyAction} from "../../redux/actions/andriyAction";
import store from "../../redux/store";
const Andriy = ({Component}) =>{
    const dispatch = useDispatch();
    const users = useSelector((store)=>store.andriy.results);
    const info = useSelector((store)=>store.andriy.info)
    const [activePage, setActivePage] = useState(1);
    // const [info, setInfo] = useState();
    // const [users, setUsers] = useState();
    const getEpisode = async ()=>{
        try {
            const {data} = await EpisodeApi.getEpisode(activePage)
            // setInfo(data.info);
            // setUsers(data.results);
            dispatch(andriyAction.setEpisode(data.results));
            dispatch(andriyAction.setInfo(data.info));
        }catch (e) {

        }
    }
    useEffect(()=>{
        getEpisode();
    },[activePage])
    return(
        <div>
            <Pagination
                prev
                last
                next
                first
                size="xs"
                total={info?.count}
                limit={20}
                maxButtons={3}
                activePage={activePage}
                onChangePage={setActivePage}
            />
            <Component
                users={users}
            />
        </div>
    )
}
export default Andriy;