import {useEffect} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import {db, storage} from "../../firebase";
import {listAll, ref} from "firebase/storage";

const useGetInfo = (setIsLoading, setData, uid, data, deleteUnusedImages) => {
    useEffect(() => {
        setIsLoading(true)
        // addInfo();
        getInfo();

    }, [])

    useEffect(() => {
        data && setIsLoading(false)
        console.log('data', data)
        data?.generalInfo && getImagesList()
    }, [data])

    const collectionRef = collection(db, uid)
    const getInfo = () => {
        onSnapshot(collectionRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            console.log('data[0]', data)
            setData(data[0])
        })
    }
    const getImagesList = () => {
        const listRef = ref(storage, `/${uid}`)
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

    return 'Ihor'
}
export default useGetInfo;
