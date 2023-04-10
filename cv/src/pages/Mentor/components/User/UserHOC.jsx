import {ref, uploadBytesResumable, getDownloadURL, deleteObject, listAll} from "firebase/storage";
import {onAuthStateChanged, signOut} from "firebase/auth"
import {collection, addDoc, onSnapshot, doc, setDoc, deleteDoc} from "firebase/firestore"
import {auth, db, storage} from "../../../../firebase";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../../common/AppRoutes";
import {useEffect, useState} from "react";
import {mockData} from "../../../User/User";


const UserHOC = ({Component}) => {
    // onAuthStateChanged(auth, (currentUser) => console.log(currentUser))
    const [uploading, setUploading] = useState(false);
    const [fileInfo, setFileInfo] = useState(null);
    const [isEditMode, setIsEditMOde] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [previousImageName, setPreviousImageName] = useState('')
    const [newImage, setNewImage] = useState('')
    const [data, setData] = useState()
    const navigate = useNavigate();
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    const collectionRef = collection(db, authUser?.uid)


    useEffect(() => {
        setIsLoading(true)
        // addInfo();
        getInfo();

    }, [])

    useEffect(() => {
        data && setIsLoading(false)
        console.log(data)
        data?.generalInfo && getImagesList()
    }, [data])

    const getImagesList = () => {
        const listRef = ref(storage, `/${authUser?.uid}`)
        listAll(listRef)
            .then((res) => {
                const imageLIst = res.items.map((itemRef) => itemRef?.name)
                console.log(imageLIst)
                const notUsedImages = imageLIst.filter(img => img !== data?.generalInfo?.imageName)
                console.log(notUsedImages)
                console.log(notUsedImages?.length > 0)
                notUsedImages?.length > 0 && deleteUnusedImages(notUsedImages)
            }).catch((error) => {
            console.log(error)
            // Uh-oh, an error occurred!
        });
    }

    const deleteUnusedImages = (arr) => {
        console.log(arr)
        arr.forEach(item => deleteImageFromStorage(item))
    }

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('authUser')
            navigate(AppRoutes.LOGIN)
        } catch (e) {
            console.log(e);
        }
    }
    //to add new collection
    const addInfo = async () => {
        try {
            const docRef = await addDoc(collectionRef, mockData)
            docRef?.id && alert('Success')
        } catch (e) {
            console.log(e.message)
        }
    }

    //to get data from collection
    const getInfo = () => {
        onSnapshot(collectionRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            console.log('data[0]',data)
            setData(data[0])
        })
    }

    //to update or add the collection
    const updateInfo = async (generalInfo) => {
        console.log('generalInfo', generalInfo)
        const docRef = doc(db, authUser?.uid, data?.id)
        await setDoc(docRef, {
            ...data,
            generalInfo:{
                ...generalInfo,
                ...newImage
            }
        })
        previousImageName && deleteImageFromStorage();
        setIsEditMOde(false)
    }

    //to delete data from  collection
    const deleteInfo = async () => {
        const docRef = doc(db, authUser?.uid, data?.id)
        await deleteDoc(docRef);
        setIsEditMOde(false)
    }


    const deleteImageFromStorage = (imageName = previousImageName) => {
        console.log(imageName)
        const storageRef = ref(storage, `/${authUser?.uid}/${imageName}`)
        deleteObject(storageRef)
            .then(() => {
                console.log("File deleted")
                setPreviousImageName('')
                setNewImage({})
            } )
            .catch((e) => console.log("File delete Error") )
    }
    const handleFileUpload = async (file) => {
        setUploading(true);
        const storageRef = ref(storage, `/${authUser?.uid}/${file.name}`)
        const uploadData = uploadBytesResumable(storageRef, file)

        uploadData.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log(progress)
            },
            (error)=>{
                console.log(error)
                setUploading(false);
                setFileInfo('')
            },
            ()=>{
                getDownloadURL(uploadData.snapshot.ref)
                    .then(url => {
                        console.log(url)
                        setUploading(false);
                        setPreviousImageName(data?.generalInfo?.imageName)
                        setNewImage({
                            imageUrl: url,
                            imageName: file.name,
                        })
                    })
            }

    )
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
        handleFileUpload={handleFileUpload}
        setFileInfo={setFileInfo}
        fileInfo={fileInfo}
        uploading={uploading}
    />
}

export default UserHOC;
