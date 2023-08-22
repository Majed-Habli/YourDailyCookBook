import React, { useState } from "react";
import styles from './signin.module.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = async () => {
        try{
            const body = {
                email: email,
                password: password
            }
            const parsebody = JSON.stringify(body);
            const response = await fetch('http://127.0.0.1:8000/api/guest/login',{
                method: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: parsebody
            });
            const data = await response.json();
            if(data.status === "success"){
                console.log("success");
            }else{
                console.log("user does not exist");
            }
        }catch(error){
            console.log("failed to call api", error);
        }
    }

    const Signup  = () => {
        window.location.href = "./signup";
    }

    return(
        <div className={styles.container}>
            <div className={styles.input_form}>
                <div className={styles.title_container}>
                    <div className={styles.title}>Daily Cook Book</div>
                    <div>Welcome Back</div>
                    <div className={styles.slogan}>
                        sign in and get cooking.
                    </div>
                </div>

                <div className={styles.row}>
                    <label>Email:</label>
                    <input type="text"  value={email} onChange={ e => setEmail(e.target.value)} placeholder="Email"/>
                </div>
                <div className={styles.row}>
                    <label>password:</label>
                    <input type="password"  value={password} onChange={ e => setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <div className={styles.button_container}>
                    <button onClick={Login}>Login</button>
                </div>
                <div className={styles.CTA}>Don't have an account? <span onClick={Signup}>Sign Up</span></div>
            </div>
        </div>
    )
}

export default Signin;