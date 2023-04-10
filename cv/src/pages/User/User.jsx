import {useEffect, useContext} from "react";
import {useLocation, useParams, useNavigate, Link} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes.jsx";
import DemoUser from "../Mentor/components/DEmo component/DemoUser";
import EditUser from "../Mentor/components/EditUSercomponent/EditUser";
import {UserHOCContext} from "../Mentor/components/User/UserHOC";

export const mockData = {
    generalInfo: {
        fullName: "Ihor Kurylov",
        position: 'React Developer',
        summary: "lorem",
        imageUrl: '',
        imageName: '',
    },
    languages: [
        {
            name: 'Ukrainian',
            level: 'native speaker'
        },
        {
            name: 'English',
            level: 'Upper Intermediate Strong'
        }
    ],
    hardSkills: [
        'HTML5', 'CSS3', 'JavaScript (ES5, ES6)',
    ],
    softSkills: [
        'punctual', 'outgoing person'
    ],
    education: [
        {
            name: '',
            startYear: '',
            degree: '',
            info: '',
        }
    ],
    contacts: {
        email: 'linkedin.url',
        skype: 'skype name',
        linkedin: 'linkedin.url',
        github: 'github.url'
    },
}

const User = () => {
    const {
        handleSignOut,
        deleteInfo,
        isEditMode,
        setIsEditMOde,
        data,
        isLoading,
    } = useContext(UserHOCContext);

    // useEffect(() => {
    //     addInfo();
    // }, [])
    // const {pathname} = useLocation()
    // const {userId} = useParams()
    // const navigate = useNavigate()

    useEffect(() => {
        // authUser?.id !== userId && navigate(AppRoutes.MAIN)
    }, [])
    return <div>
        <Link to={AppRoutes.MAIN}>to main</Link>
        <button onClick={handleSignOut}>SignOut</button>
        <button onClick={deleteInfo}>DELETE !!!</button>
        <button
            onClick={() => setIsEditMOde((prevState) => !prevState)}
        >
            {isEditMode ? "Save" : "Edit"}
        </button>
        <br/>
        <br/>
        <hr/>

        {isEditMode && data
            ? <EditUser/>
            : isLoading
                ? <h1>Loading</h1>
                : data
                    ? <DemoUser />
                    : <h1>No data</h1>}

    </div>
}

export default User;
