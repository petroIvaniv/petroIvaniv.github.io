import {useEffect} from "react";
import {useLocation, useParams, useNavigate} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes.jsx";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase";
import DemoUser from "../Mentor/components/DEmo component/DemoUser";
import EditUser from "../Mentor/components/EditUSercomponent/EditUser";

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

const User = ({handleSignOut, deleteInfo, isEditMode, setIsEditMOde, addInfo, data, isLoading, handleGIEdit}) => {

    // const {pathname} = useLocation()
    // const {userId} = useParams()
    // const navigate = useNavigate()

    useEffect(() => {
        // authUser?.id !== userId && navigate(AppRoutes.MAIN)
    }, [])
    return <div>
        <h1>USER ID</h1>
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
            ? <EditUser addInfo={addInfo} data={data} handleGIEdit={handleGIEdit}/>
            : isLoading
                ? <h1>Loading</h1>
                : data
                    ? <DemoUser data={data} isLoading={isLoading}/>
                    : <h1>No data</h1>}

    </div>
}

export default User;
