import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../public/Firebase/Firebase.config";
import {useState} from 'react';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const handleSubmitBtn = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password) 

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <form className="my-5 mx-36" onSubmit={handleSubmitBtn}>
                <input className="my-2 bg-pink-300" name="email" placeholder="Your E-mail" type="email"/><br></br>
                <input className="my-2 bg-pink-300" name="password" placeholder="Password" type="password"/><br></br>
                <input name="submit" type="submit" value="Log-in"/>
            </form>
        </div>
    );
};

export default Login;