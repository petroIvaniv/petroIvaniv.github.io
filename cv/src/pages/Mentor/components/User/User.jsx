import styles from './User.module.scss';
import React from 'react';

const UserComp = ({user, handleClick}) => {
    console.log('User')
    return (
        <div onClick={()=>handleClick(user)}>
            <p>{user.name}</p>
            <img src={user.image} className={styles.image} alt=""/>
        </div>
    )
}

export default UserComp

export const Comp = React.memo(({name}) => {

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
});

// export const MemoComp = React.memo(Comp)

