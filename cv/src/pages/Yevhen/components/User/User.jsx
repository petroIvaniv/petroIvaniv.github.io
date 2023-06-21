import React from "react";
import styles from "./User.module.scss";

// const User = ({user, handleClick}) => {
//     // console.log("user");
//     return(
//         <div onClick={()=>handleClick(user)} className={styles.div}>
//             {<p>{user.name}</p>}
//             {<img src={user.image} alt="" className={styles.img}/>}
//         </div>
//     )
// }
// 
// export default User;

const Location = ({location, handleClick}) => {
    return(
        <div onClick={()=>handleClick(location)} className={styles.div}>
            <p>{location.name}</p>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
        </div>
    )
}

export default Location;

export const YevhenUser = React.memo(({ locations, handleClick}) => {
    return (
        <div>
            {/* {users?.map((user, index) => 
                <User
                key={user.name + index}
                user = {user}
                handleClick={handleClick}
            />)} */}
            {locations?.map((location, index) => 
                <Location
                key={location.name + index}
                location = {location}
                handleClick={handleClick}
            />)}
        </div>
    )
});
