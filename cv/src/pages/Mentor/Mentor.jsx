import {useEffect, useState} from "react";
import UserComp, {Comp} from "./components/User/User";


const Mentor = () => {
    const [users, setUsers] = useState([]);
    let name = "ne Ihor"
    const handleClick = (user) => alert(user.name)
    console.log('Container')

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
            .then(data=> data.json())
            .then(res =>{
                // console.log(res.results)
                setUsers(res.results)
                // console.log('moreUsers', moreUsers)
            })
    }, []);

    return(
        <div>
            <h1>Mentor</h1>\
            <Comp name={name}/>
            {/*<MemoComp name={name}/>*/}
            {users?.map((user,index) =>
                <UserComp
                    key={user.name}
                    user={user}
                    handleClick={handleClick}
                />)}




        </div>
    )
}

export default Mentor
