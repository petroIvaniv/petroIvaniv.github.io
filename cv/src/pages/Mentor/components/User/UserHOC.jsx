import { onAuthStateChanged, signOut } from "firebase/auth"
import { collection, addDoc, onSnapshot, doc, setDoc, deleteDoc } from "firebase/firestore"
import {auth, db} from "../../../../firebase";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../../common/AppRoutes";
import {useEffect, useState} from "react";
import {mockData} from "../../../User/User";


const UserHOC = ({Component}) => {
    // onAuthStateChanged(auth, (currentUser) => console.log(currentUser))
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('authUser')
            navigate(AppRoutes.LOGIN)
        } catch (e) {
            console.log(e);
        }
    }
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    const collectionRef = collection(db, authUser?.uid)
    const [isEditMode, setIsEditMOde] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {
        setIsLoading(true)
        getInfo();
    },[])

    useEffect(() => {
       data && setIsLoading(false)
        console.log(data)
    },[data])

    //to add new collection
    const addInfo = async () => {
        try{
            const docRef = await addDoc(collectionRef, mockData)
            docRef?.id && alert('Success')
        } catch (e) {
            console.log(e.message)
        }
    }

    //to get data from collection
    const getInfo = ()=>{
        onSnapshot(collectionRef, (snapshot) => {
            const data = snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id}))
            setData(data[0])
        })
    }

    //to update or add the collection
    const updateInfo = async (generalInfo)=> {
        console.log('generalInfo', generalInfo)
        const docRef = doc(db, authUser?.uid, data?.id)
        await setDoc(docRef, {
            ...data,
            generalInfo
        })
        setIsEditMOde(false)
    }

    //to delete data from  collection
    const deleteInfo = async () => {
        const docRef = doc(db, authUser?.uid, data?.id)
        await deleteDoc(docRef);
        setIsEditMOde(false)
    }

    return <Component
        isEditMode={isEditMode}
        handleSignOut={handleSignOut}
        setIsEditMOde={setIsEditMOde}
        addInfo={addInfo}
        data={data}
        isLoading={isLoading}
        handleGIEdit={updateInfo}
        deleteInfo={deleteInfo}
    />
}

export default UserHOC;
