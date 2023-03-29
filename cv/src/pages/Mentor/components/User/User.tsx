
// @ts-ignore
import styles from "./User.module.scss";
import React from 'react';
import {User} from "../../../../types/interfaces";


export interface CompProps {
    handleClick: (u:User)=> void
    users: User[]
    name: string
}

interface UserCompProps {
    handleClick: (u: User)=> void
    user: User
}



const UserComp = ({user, handleClick}: UserCompProps) => {
    return (
        <div onClick={()=>handleClick(user)}>
            <p>{user.name}</p>
            <img src={user.image} className={styles.image} alt=""/>
        </div>
    )
}

export default UserComp

export const Comp = React.memo(({name, users, handleClick}: CompProps) => {

    return (
        <div>
            <h1>{name}</h1>
            {users?.map((user: User,index: number) =>
                <UserComp
                    key={user.name + index}
                    user={user}
                    handleClick={()=>handleClick(user)}
                />)}
        </div>
    )
});

// export const MemoComp = React.memo(Comp)

