import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../../firebase";
import {AppRoutes} from "../../common/AppRoutes";
import {useNavigate} from "react-router-dom";


const SignUpInHOC = ({Component}) =>{
  onAuthStateChanged(auth, (currentUser) => console.log(currentUser))
  const navigate = useNavigate();
  const handleSignUp = async (formValue) => {
    try{
      const response = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
      console.log(response)
      response?.user?.uid && navigate(AppRoutes.LOGIN)
    } catch (e) {

    }
  }
  const handleSignIn = async (formValue) => {
    try{
      const response = await signInWithEmailAndPassword(auth, formValue.email, formValue.password)
      console.log(response)
      if(response?.user?.uid){
        localStorage.setItem('authUser', JSON.stringify(response.user))
        navigate(`/user/${response?.user?.uid}`)
      }
    } catch (e) {

    }
  }

  return <Component
      handleSignIn={handleSignIn}
      handleSignUp={handleSignUp}
  />
}

export default SignUpInHOC;
