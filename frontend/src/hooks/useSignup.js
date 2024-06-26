import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';


const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser}= useAuthContext();

  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
    if (!success) return;
    
    setLoading(true);

    try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
        });

        const data = await res.json();
        console.log(data);
        if(data.error){
          throw new Error(data.error);
        }
        // Localstorage so that when we refresh again we must know whether user logged in or not -> Store in localstorage
        localStorage.setItem("chat-user",JSON.stringify(data));
        // Context to be loaded
        setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  };
  return {loading,signup};
};

export default useSignup

// for handling input errors
function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender)
  {  toast.error("Please fill in all the details !");
  return false;
}

  if(password != confirmPassword)
  {
    toast.error("Passwords do not match !");
    return false;
  }

  if(password.length < 6)
  { 
    toast.error("Password must be atleast 6 characters !");
    return false;
  }

  return true;
}