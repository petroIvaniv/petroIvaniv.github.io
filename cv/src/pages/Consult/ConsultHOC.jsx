import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ConsultHOC = ({Component}) =>{
const navigate = useNavigate()
  const handleLogin = async(formData) => {
    try{
      const response = await axios.post('http://localhost:5500/api/login', formData)
      if(response?.data?.name) {
        localStorage.setItem('authUser', JSON.stringify(response.data) )
        navigate('/users')
      }

    } catch (e) {

    }
  }


  return <Component handleLogin={handleLogin}/>
}

export default ConsultHOC;
