import {useEffect, useState, useContext} from "react";
import {Loader, Uploader, useToaster} from "rsuite";
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import {UserHOCContext} from "../User/UserHOC";

function previewFile(file, callback) {
    const reader = new FileReader();
    reader.onloadend = () => {
        callback(reader.result);
    };
    reader.readAsDataURL(file);
}


const EditUser = () => {
    const {setFileInfo, uploading, fileInfo, data, handleGIEdit, handleFileUpload} = useContext(UserHOCContext);

    const [formValue, setFormValue] = useState(data.generalInfo)
    console.log(formValue)
    const handleInputChange = (key, value) =>{
        setFormValue((prevState) => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    useEffect(()=>{
        setFormValue((prevState) => {
            return {
                ...prevState,
                imageUrl: data.generalInfo?.imageUrl,
                imageName: data.generalInfo?.imageName,
            }
        })
    }, [data.generalInfo])

    return (<>
        <h1>EditUser</h1>



            <Uploader
                fileListVisible={false}
                listType="picture"
                action=""
                multiple={false}
                autoUpload={false}
                onChange={async (fileList)=>{
                    console.log(fileList)
                        previewFile(fileList[fileList.length-1].blobFile, value => {
                            setFileInfo(value);
                        });
                    handleFileUpload(fileList[fileList.length-1].blobFile)
                }}
            >
                <button style={{ width: 150, height: 150 }}>
                    {uploading && <Loader backdrop center />}
                    {formValue?.imageUrl && !fileInfo ? (
                        <img src={formValue?.imageUrl  } width="100%" height="100%" />
                    ) : fileInfo ? (
                            <img src={fileInfo} width="100%" height="100%" />
                        ) : (
                        <AvatarIcon style={{ fontSize: 80 }} />
                    )}
                </button>
            </Uploader>
            <br/>
            <input
                type="text"
                value={formValue?.fullName}
                onChange={(e)=> handleInputChange('fullName', e.target.value)}
            />
            <br/>
            <input
                type="text"
                value={formValue?.position}
                onChange={(e)=> handleInputChange('position', e.target.value)}
            />
            <br/>
            <textarea
                value={formValue?.summary}
                onChange={(e)=> handleInputChange('summary', e.target.value)}
            />
            <br/>
            <button type='button' onClick={()=>handleGIEdit(formValue)}>Save general info</button>
    </>
        )
};

export default EditUser
