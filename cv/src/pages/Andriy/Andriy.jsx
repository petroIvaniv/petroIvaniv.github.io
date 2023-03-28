import './Andriy.module.scss'
import {Pagination} from "rsuite";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEpisodeThunk} from "../../redux/actions/andriyAction";
const Andriy = ({Component}) =>{
    const dispatch = useDispatch();
    const users = useSelector((store)=>store.andriy.results);
    const info = useSelector((store)=>store.andriy.info)
    const [activePage, setActivePage] = useState(1);
    const getEpisode = (activePage) => dispatch(getEpisodeThunk(activePage));
    useEffect(()=>{
        getEpisode(activePage);
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