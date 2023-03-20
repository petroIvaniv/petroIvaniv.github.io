import style from './style.module.scss';
import React from 'react';

const UserComp = ({user}) => {
    return (
        <div className={style.container}>
            <p className={style.name}>{user.name}</p>
            {/* <img src={user.image_url} className={style.img} alt=""/> */}
        </div>
    )
}

export default UserComp

export const Locations = React.memo(({name, users}) => {

    return (
        <div>
            <h1 className={style.title}>Locations from Rick and Morty</h1>
            {users?.map((user,index) =>
                <UserComp
                    key={user.name + index}
                    user={user}
                />)}
        </div>
    )
});
