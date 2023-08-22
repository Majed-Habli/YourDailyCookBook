import React, { useState } from "react";
import styles from './signin.module.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className={styles.container}>
            <div className={styles.input_form}>
                <div className={styles.row}>
                    <label>Email:</label>
                    <input type="text"  value={email} onChange={ e => setEmail(e.target.value)} placeholder="Email"/>
                </div>
                <div className={styles.row}>
                    <label>password:</label>
                    <input type="password"  value={password} onChange={ e => setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <div className={styles.button_container}>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Signin;