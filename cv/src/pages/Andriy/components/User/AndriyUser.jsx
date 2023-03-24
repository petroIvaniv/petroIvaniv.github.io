import React from 'react';

const UserComp = ({user}) => {
    return (
        <div>
            <p>{user.episode} {user.name}</p>
        </div>
    )
}

export default UserComp

export const AndriyUser = React.memo(({users}) => {

    return (
        <div>
            {users?.map((user,index) =>
                <UserComp
                    key={user.name + index}
                    user={user}
                />)}
        </div>
    )
});