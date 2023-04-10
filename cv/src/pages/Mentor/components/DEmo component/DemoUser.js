import {useContext} from "react";
import {UserHOCContext} from "../User/UserHOC";

const DemoUser = () => {
   const {data, isLoading} = useContext(UserHOCContext);
    return (
        <>
            <h1>Demo</h1>
            {data?.generalInfo?.imageUrl &&
                <img
                    src={data?.generalInfo?.imageUrl}
                    alt="image"
                    style={{width: "100px"}}
                />
            }

            <p>{data.generalInfo?.fullName}</p>
            <p>{data.generalInfo?.position}</p>
            <p>{data.generalInfo?.summary}</p>
        </>


    );
}

export default DemoUser
