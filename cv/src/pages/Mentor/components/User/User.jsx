import styles from './User.module.scss';
import React from 'react';

const UserComp = ({user, handleClick}) => {
    return (
        <div onClick={()=>handleClick(user)}>
            <p>{user.name}</p>
            <img src={user.image} className={styles.image} alt=""/>
        </div>
    )
}

export default UserComp

export const Comp = React.memo(({name, users, handleClick}) => {

    return (
        <div>
            <h1>{name}</h1>
            {users?.map((user,index) =>
                <UserComp
                    key={user.name + index}
                    user={user}
                    handleClick={handleClick}
                />)}
        </div>
    )
});

// export const MemoComp = React.memo(Comp)

