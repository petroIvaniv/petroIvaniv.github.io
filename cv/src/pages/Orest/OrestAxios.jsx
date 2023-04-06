import React from 'react';

const UserComponent = ({user}) => {
    return (
        <div>
            <p>{user.location} {user.name}</p>
        </div>
    )
}

export default UserComponent

export const OrestAxios = React.memo(({users}) => {
    return (
        <div>
            {users?.map((user,index) =>
                <UserComponent
                    key={user.name + index}
                    user={user}
                />)}
        </div>
    )
});