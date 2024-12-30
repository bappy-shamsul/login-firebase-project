import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../public/Firebase/Firebase.config";
import {useState} from 'react';

const Signup = () => {
    const [registerError, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleRegister = e =>{

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const regExPass = ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
        console.log(email, password) 
        setErrorMessage('')
        setSuccessMessage('')
        if(password.length < 8){
            setErrorMessage('Please keep it at least 8');
            return
        }else if(!regExPass.test(password)){
            setErrorMessage('Password should carry conditions');
            return
        }


        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
            setSuccessMessage('Registration is successfully done')
        })
        .catch(error =>{
            console.error(error);
            setErrorMessage(error.code)
        })
    
    }
    return (
        <div>
            <form className="my-5 mx-36" onSubmit={handleRegister}>
                <input className="my-2 bg-pink-300" name="email" placeholder="Your E-mail" type="email" required/><br></br>
                <input className="my-2 bg-pink-300" name="password" placeholder="Password" type="password" required/><br></br>
                <input name="submit" type="submit" value="Sign Up"/>
            </form>
            {
                registerError && <p className="text-red-700 mx-72">{registerError}</p>
            }
            {
                successMessage && <p className="text-green-600 mx-72">{successMessage}</p>
            }

            <p>Here is Terms and Conditions </p>
        </div>
    );
};

export default Signup;